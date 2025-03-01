import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { UrlsNames } from '../../../../models/shared';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-left-side-bar',
    imports: [MatIconModule, RouterLink],
    templateUrl: './left-side-bar.component.html',
    styleUrl: './left-side-bar.component.scss'
})
export class LeftSideBarComponent {
  toggleSideBar = input(true);
  urlsNames = UrlsNames;
}
