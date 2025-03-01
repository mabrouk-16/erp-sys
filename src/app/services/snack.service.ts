import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SnackService {
  private matSnackBar = inject(MatSnackBar);
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  success(message: string, duration = 3000) {
    this.matSnackBar.open(message, 'X', {
      duration: duration,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: 'successful',
      politeness: 'assertive',
    });
  }
  error(message: string, duration = 3000) {
    this.matSnackBar.open(message, 'X', {
      duration: duration,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: 'errorSnackbar',
      politeness: 'assertive',
    });
  }
}
