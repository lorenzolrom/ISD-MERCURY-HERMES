import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApiService} from "../_services/api.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {GlobalVariables} from "../globals";

export interface DialogData {
  number; // Ticket number
  title; // Ticket title
  workspace;
  workspaceName;
}

@Component({
  selector: 'app-help-desk-update',
  templateUrl: './help-desk-update.dialog.html',
  styleUrls: ['./help-desk-new.dialog.scss']
})
export class HelpDeskUpdateDialog {
  submitting: boolean = false;

  requestData = {
    description: ''
  }

  constructor(public dialogRef: MatDialogRef<HelpDeskUpdateDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private _api: ApiService, private _snackBar: MatSnackBar) {

  }

  submitUpdate()
  {
    this.submitting = true;

    return this._api.put('tickets/requests/' + this.data.workspace + '/' + this.data.number, this.requestData).subscribe(
      () => {
        this._snackBar.open('Request Updated', 'Dismiss', {duration: GlobalVariables.NOTIFICIATION_DURATION});
        this.dialogRef.close();
      },
      () => {this.submitting = false;}
    );
  }
}
