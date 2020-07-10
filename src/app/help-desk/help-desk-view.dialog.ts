import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ApiService} from "../_services/api.service";
import {HelpDeskUpdateDialog} from "./help-desk-update.dialog";

export interface DialogData {
  workspace: number;
  workspaceName: string;
  number: number;
  title: string;
  type: string;
  category: string;
  status: string;
  updates; // Array of updates

  // Following variables can be null or string
  closureCodeName;
  desiredDate;
  scheduledDate;
}

@Component({
  selector: 'help-desk-view-dialog',
  templateUrl: 'help-desk-view.dialog.html',
  styleUrls: ['./help-desk-view.dialog.scss']
})
export class HelpDeskViewDialog {
  constructor(public dialogRef: MatDialogRef<HelpDeskViewDialog>,@Inject(MAT_DIALOG_DATA) public data: DialogData, private _api: ApiService, public dialog: MatDialog) {

  }

  openUpdateDialog()
  {
    this.dialog.open(HelpDeskUpdateDialog, {
      data: this.data
    });
  }
}
