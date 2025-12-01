import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-auth-layout',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    TranslateModule,
    MatIcon,
    RouterLink,
    RouterOutlet,
    
  ],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.scss',
})
export class AuthLayout {}
