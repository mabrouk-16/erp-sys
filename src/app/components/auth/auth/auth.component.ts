import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FireAuthService } from '../services/fire-auth.service';
import { Router } from '@angular/router';
import { SnackService } from '../../../services/snack.service';
import { UserService } from '../services/user.service';
import { UrlsNames } from '../../../models/shared';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  private auth = inject(FireAuthService);
  private router = inject(Router);
  private snack = inject(SnackService);
  private userService = inject(UserService);

  signUp = signal(false);

  register(regForm: NgForm) {
    console.log(regForm.value);
    this.auth.registerWithFB(regForm.value).subscribe({
      next: (res) => {
        this.snack.success('User Successfully Registered');
        this.auth
          .loginWithFB({
            email: regForm.value.email,
            password: regForm.value.password,
          })
          .subscribe({
            next: (res) => {
              // console.log(res)
              // this.userService.saveUser();

              this.router.navigate(['/home']).then(() => {
                this.snack.success('User Successfully LoggedIn');
              });
            },
          });
      },
      error: (err) => {
        alert(err);
      },
    });
  }
  login(loginForm: NgForm) {
    this.auth.loginWithFB(loginForm.value).subscribe({
      next: (res) => {
        this.router.navigateByUrl(
          UrlsNames.root + UrlsNames.home + '/' + UrlsNames.dashboard
        );
        this.snack.success('User Successfully LoggedIn');
      },

      error: (error) => {
        this.snack.error(error.message);
      },
    });
  }
}
