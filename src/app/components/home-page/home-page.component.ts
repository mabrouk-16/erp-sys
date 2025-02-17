import { Component, signal } from '@angular/core';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { LeftSideBarComponent } from './components/left-side-bar/left-side-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TopBarComponent, LeftSideBarComponent, RouterOutlet],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  toggleSideBar = signal(true);
}
