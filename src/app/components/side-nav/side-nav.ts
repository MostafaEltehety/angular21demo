import { Component, computed, signal, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatListItem,
    MatIconModule,
    RouterLink,
    RouterOutlet,
    MatToolbarModule,
    MatNavList,
    MatMenuModule,
],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
   encapsulation: ViewEncapsulation.None
})
export class SideNav {
collabse=signal(false);
sidenavWidth=computed(()=>this.collabse()?'60px':'250px');
toggle() {
this.collabse.update(x=>x=!x);
}
}
