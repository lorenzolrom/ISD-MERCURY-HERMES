import {ApiService} from "../_services/api.service";
import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

export interface DialogData {
  category; // Array of categories
  type; // Array of types
}

@Component({
  selector: 'help-desk-new-dialog',
  templateUrl: 'help-desk-new.dialog.html',
  styleUrls: ['./help-desk-new.dialog.scss']
})
export class HelpDeskNewDialog {
  submitting: boolean = false;

  requestData = {
    title: '',
    type: '',
    category: '',
    desiredDateRaw: '',
    description: ''
  }

  constructor(public dialogRef: MatDialogRef<HelpDeskNewDialog>,@Inject(MAT_DIALOG_DATA) public data: DialogData, private _api: ApiService, private _snackBar: MatSnackBar) {
  }

  submitRequest()
  {
    this.submitting = true;
    // Convert datepicker to ISO-8601
    if(this.requestData.desiredDateRaw)
    {
      this.requestData['desiredDate'] = new Date(this.requestData.desiredDateRaw).toISOString().slice(0,10)
    }

    return this._api.post('tickets/requests', this.requestData).subscribe(
      () => {
        this._snackBar.open('Request Submitted', 'Dismiss');
        this.dialogRef.close();
      },
      () => {this.submitting = false;}
    );
  }
}
