import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { MatIcon } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { SideNav } from '../../../../components/side-nav/side-nav';
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
    MatTooltipModule,
    MatMenuModule
],
providers:[SideNav],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.scss',
  standalone:true
})
export class AuthLayout {
  menuServices=inject(SideNav);
}
