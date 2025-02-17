import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-left-side-bar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './left-side-bar.component.html',
  styleUrl: './left-side-bar.component.scss',
})
export class LeftSideBarComponent {
  toggleSideBar = input(true);
}
