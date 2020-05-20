import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../_services/api.service";
import {GlobalVariables} from "../globals";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {HelpDeskViewDialog} from "./help-desk-view.dialog";
import {MatDialog} from "@angular/material/dialog";
import {map, mergeMap} from "rxjs/operators";
import {HelpDeskNewDialog} from "./help-desk-new.dialog";

@Component({
  selector: 'app-help-desk-landing',
  templateUrl: './help-desk-landing.component.html',
  styleUrls: ['./help-desk-landing.component.scss']
})
export class HelpDeskLandingComponent implements OnInit {
  displayedColumns: string[] = ["title", "workspaceName", "number", "type", "category", "status", "updated"];
  requests;
  dataSource;

  loadingOpenRequests: boolean = true;
  title: string = "Help Desk";
  infoScapeUrl: string;

  constructor(private _api: ApiService, public dialog: MatDialog) {
    this.infoScapeUrl = GlobalVariables.INFOSCAPE_URL;
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

   async ngOnInit() {
     this.requests = await this.loadRequests();
     this.dataSource = new MatTableDataSource(this.requests);
     this.loadingOpenRequests = false;

    this.dataSource.sort = this.sort;
  }

  /**
   * Return the promise from ApiService getting all requests
   */
  loadRequests()
  {
    return this._api.get('tickets/requests/open').toPromise();
  }

  /**
   * Select the Request JSON object and open a dialog
   * @param workspace
   * @param number
   */
  openRequest(workspace, number): void
  {
    let requestData;
    let updateData;

    this._api.get('tickets/requests/' + workspace + '/' + number).pipe(
      map(request => { // Get Request Details
        requestData = request;
        return request;
      }),
      mergeMap( // Then...get updates from request
        () => this._api.get('tickets/requests/' + workspace + '/' + number + '/updates')
      )).pipe(
        map(updates => {
          updateData = updates;
        })
      ).subscribe(() => {
        requestData['updates'] = updateData; // Merge datasets
        this.dialog.open(HelpDeskViewDialog, { // Open dialog
          data: requestData
        });
    });
  }

  /**
   * Open a new ticket dialog
   */
  openNewRequest(): void
  {
    this._api.get('tickets/requests/attributes').pipe(
      map(attributes => {
        return attributes;
      })
    ).subscribe(result =>  {
      this.dialog.open(HelpDeskNewDialog, {
        width: '500px',
        data: result
      });
    })
  }
}
