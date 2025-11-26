// src/app/components/theme-toggle.component.ts
import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeService } from '../../services/theme';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [
     MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatMenuModule
  ],
templateUrl:'./theme-toggle.html',
styleUrl:'./theme-toggle.scss'
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);

  @Input() variant: 'icon-button' | 'text-button' | 'toggle-switch' | 'fab' | 'mini-fab' | 'menu' | 'animated' = 'icon-button';

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  setTheme(mode: 'light' | 'dark' | 'auto'): void {
    if (mode === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.themeService.setDarkMode(prefersDark);
    } else {
      this.themeService.setDarkMode(mode === 'dark');
    }
  }

  getTooltipText(): string {
    return this.themeService.isDarkMode()
      ? 'Switch to Light Mode'
      : 'Switch to Dark Mode';
  }
}
