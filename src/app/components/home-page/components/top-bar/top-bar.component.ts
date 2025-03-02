import { Component, inject, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../../../auth/services/user.service';
import { FireAuthService } from '../../../auth/services/fire-auth.service';
import { Router, RouterLink } from '@angular/router';
import { UrlsNames } from '../../../../models/shared';

@Component({
  selector: 'app-top-bar',
  imports: [MatIconModule, RouterLink],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  userService = inject(UserService);
  fireAuth = inject(FireAuthService);
  router = inject(Router);

  toggleOutput = output<boolean>();
  toggleSideBar = input(true);
  urlsNames = UrlsNames;

  logOut() {
    this.fireAuth.logout().subscribe(() => {
      this.router.navigate(['/', 'auth']);
    });
  }
}
