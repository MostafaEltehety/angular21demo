import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from "@angular/router";
import { ThemeToggleComponent } from '../../components/theme-toggle/theme-toggle';
import { MatFormField, MatLabel } from "@angular/material/form-field";

@Component({
  selector: 'app-home',
  imports: [MatFormField, MatLabel,MatIconModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
RouterOutlet
