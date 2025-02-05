import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SnackService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private matSnackBar: MatSnackBar) {}

  success(message: string, duration = 5000) {
    this.matSnackBar.open(message, 'X', {
      duration: duration,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: 'successful',
      politeness: 'assertive',
    });
  }
  error(message: string, duration = 5000) {
    this.matSnackBar.open(message, 'X', {
      duration: duration,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: 'errorSnackbar',
      politeness: 'assertive',
    });
  }
}
