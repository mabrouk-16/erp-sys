import { Component } from '@angular/core';
import { TopBarComponent } from "./components/top-bar/top-bar.component";
import { LeftSideBarComponent } from "./components/left-side-bar/left-side-bar.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TopBarComponent, LeftSideBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
