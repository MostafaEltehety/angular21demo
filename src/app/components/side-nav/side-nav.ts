import { Component, computed, inject, signal, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { ThemeService } from '../../services/theme';
import { NgIf, NgTemplateOutlet, NgStyle } from '@angular/common';

@Component({
  selector: 'app-side-nav',
  standalone: true,
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
    TranslateModule,
    MatTooltipModule,
    MatBadgeModule,
    RouterLinkActive,
    NgTemplateOutlet,
    NgStyle
],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SideNav {
  collabse = signal(false);
  sidenavWidth = computed(() => (this.collabse() ? '60px' : '275px'));
  translate = inject(TranslateService);
  public curentLanguage = signal('ar');
  isRtl = computed(() => this.curentLanguage() === 'ar');

  themeService = inject(ThemeService);

  constructor() {
    // Attempt to retrieve saved language from localStorage
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      this.curentLanguage.set(savedLang);
      this.translate.use(savedLang);
      this.updateDirection(savedLang);
    } else {
      // Default to Arabic if no language is saved
      this.translate.setDefaultLang('ar');
      this.translate.use('ar');
      this.updateDirection('ar');
    }
  }

  employeesOpen = signal(false);

  toggleEmployees() {
    if (this.collabse()) {
      this.collabse.update((x) => x == false);
    }
    this.employeesOpen.set(!this.employeesOpen());
  }

  public toggle() {
    this.collabse.update((x) => (x = !x));
  }

  private updateDirection(lang: string) {
    const htmlTag = document.documentElement;
    if (lang === 'ar') {
      htmlTag.setAttribute('dir', 'rtl');
      htmlTag.setAttribute('lang', 'ar');
    } else {
      htmlTag.setAttribute('dir', 'ltr');
      htmlTag.setAttribute('lang', 'en');
    }
  }

  public SwitchLang() {
    const newLang = this.curentLanguage() === 'ar' ? 'en' : 'ar';
    this.curentLanguage.set(newLang);
    this.translate.use(newLang);
    this.updateDirection(newLang);

    // Save the selected language in localStorage
    localStorage.setItem('language', newLang);
  }

  // Theme toggle method
  public toggleTheme() {
    this.themeService.toggleTheme();
  }

  // Get theme tooltip text
  public getThemeTooltip() {
    if (this.themeService.isDarkMode()) {
      return this.curentLanguage() === 'ar'
        ? this.translate.instant('LIGHT_MODE')
        : this.translate.instant('LIGHT_MODE');
    } else {
      return this.curentLanguage() === 'ar'
        ? this.translate.instant('DARK_MODE')
        : this.translate.instant('DARK_MODE');
    }
  }

  // Get theme icon
  public getThemeIcon(): string {
    return this.themeService.isDarkMode() ? 'light_mode' : 'dark_mode';
  }
}
