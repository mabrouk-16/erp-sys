import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../components/auth/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class authGuard {
  private userService = inject(UserService);
  private router = inject(Router);
  constructor() {}
  canActivate(): boolean {
    if (this.userService.getUser() || this.userService.user()) {
      return true;
    } else {
      this.router.navigate(['/', 'auth']);
      return false;
    }
  }
}
