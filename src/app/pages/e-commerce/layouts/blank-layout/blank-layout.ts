import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { MatIcon } from "@angular/material/icon";
import { MatMenu, MatMenuModule, MatMenuTrigger } from "@angular/material/menu";
import { MatToolbar, MatToolbarModule } from "@angular/material/toolbar";
import { SideNav } from '../../../../components/side-nav/side-nav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
 import { MatButtonModule } from '@angular/material/button';
import {  MatLabel } from "@angular/material/form-field";
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-blank-layout',
  imports: [RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    TranslateModule,
    MatIcon,
    RouterLink,
    RouterOutlet,
    MatTooltipModule,
    MatMenuModule, MatLabel,UpperCasePipe],
  templateUrl: './blank-layout.html',
  styleUrl: './blank-layout.scss',
  providers:[SideNav]
})
export class BlankLayout {
  userName='';
  menuServices=inject(SideNav);
  constructor(){
    const loginInfo=localStorage.getItem('loginInfo');
    this.userName=loginInfo?JSON.parse(loginInfo).userName:'';
  }
}
