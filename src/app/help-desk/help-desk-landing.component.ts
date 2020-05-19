import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../_services/api.service";
import {GlobalVariables} from "../globals";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {HelpDeskViewDialog} from "./help-desk-view.dialog";
import {MatDialog} from "@angular/material/dialog";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-help-desk-landing',
  templateUrl: './help-desk-landing.component.html',
  styleUrls: ['./help-desk-landing.component.scss']
})
export class HelpDeskLandingComponent implements OnInit {
  displayedColumns: string[] = ["title", "workspaceName", "number", "type", "category", "status", "updated"];
  requests;
  dataSource;

  loading = false;
  title = "Help Desk";
  infoScapeUrl;

  constructor(private _api: ApiService, public dialog: MatDialog) {
    this.infoScapeUrl = GlobalVariables.INFOSCAPE_URL;
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

   async ngOnInit() {
     this.requests = await this.loadRequests();
     this.dataSource = new MatTableDataSource(this.requests);

    this.dataSource.sort = this.sort;
  }

  loadRequests()
  {
    return this._api.get('tickets/requests/open').toPromise();
  }

  getRequest(workspace, number)
  {
    return this._api.get('tickets/requests/' + workspace + '/' + number).pipe(
      map(request => {
        return request;
      })
    );
  }

  openRequest(workspace, number): void
  {
    this.getRequest(workspace, number).subscribe(result => {
      this.dialog.open(HelpDeskViewDialog, {
        data: result
      })
    });

  }
}
