import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../../../auth/services/user.service';
import { FireAuthService } from '../../../auth/services/fire-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
  // encapsulation:ViewEncapsulation.Emulated
})
export class TopBarComponent {
  userService = inject(UserService);
  fireAuth = inject(FireAuthService);
  router = inject(Router);

  logOut() {
    this.fireAuth.logout().subscribe(() => {
      this.router.navigate(['/', 'auth']);
    });
  }
}
