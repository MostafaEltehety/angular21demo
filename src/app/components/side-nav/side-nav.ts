import { Component, computed, inject, signal, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

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
private translate=inject(TranslateService);
curentLanguage=signal('ar');
constructor(){
  this.translate.setDefaultLang('ar');
  this.translate.use('ar');
  this.updateDirection('ar');
}
toggle() {
this.collabse.update(x=>x=!x);
}

private updateDirection(lang:string){
const htmlTag=document.documentElement;
if(lang==='ar'){
htmlTag.setAttribute('dir','rtl');
htmlTag.setAttribute('lang','ar');
}else{
htmlTag.setAttribute('dir','ltr');
htmlTag.setAttribute('lang','en');
}
}
SwitchLang(){
  const newLang=this.curentLanguage()==='ar'?'en':'ar';
this.curentLanguage.set(newLang);
this.translate.use(newLang);
this.updateDirection(newLang);
}

}
