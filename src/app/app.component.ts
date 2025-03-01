import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { FireAuthService } from './components/auth/services/fire-auth.service';
import { UserService } from './components/auth/services/user.service';
import { of } from 'rxjs';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  auth = inject(Auth);
  private FireAuth = inject(FireAuthService);
  public userService = inject(UserService);
  ngOnInit(): void {
    this.FireAuth.user$.subscribe((user) => {
      if (user) {
        this.userService.setUserFromFB(user.uid);
      } else this.FireAuth.currentUser$.pipe(() => of(null));
    });
  }
}
