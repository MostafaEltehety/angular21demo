import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNav } from "./components/side-nav/side-nav";
@Component({
  selector: 'app-root',
  imports: [  SideNav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular21demo');
}
