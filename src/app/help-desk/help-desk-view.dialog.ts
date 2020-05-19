import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
  workspaceName: string;
  number: number;
  title: string;
  type: string;
  category: string;
  status: string;
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

  constructor(
    public dialogRef: MatDialogRef<HelpDeskViewDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
