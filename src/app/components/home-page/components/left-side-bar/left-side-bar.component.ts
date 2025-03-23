import { Component, inject, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { UrlsNames } from '../../../../models/shared';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../auth/services/user.service';

@Component({
    selector: 'app-left-side-bar',
    imports: [MatIconModule, RouterLink],
    templateUrl: './left-side-bar.component.html',
    styleUrl: './left-side-bar.component.scss'
})
export class LeftSideBarComponent {
  userService=inject(UserService)
  toggleSideBar = input(true);
  urlsNames = UrlsNames;
}
