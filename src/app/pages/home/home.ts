import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from "@angular/router";
import { ThemeToggleComponent } from '../../components/theme-toggle/theme-toggle';

@Component({
  selector: 'app-home',
  imports: [ RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    ThemeToggleComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
