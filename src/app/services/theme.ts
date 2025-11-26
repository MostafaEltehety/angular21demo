// src/app/services/theme.service.ts
import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Signal للتحكم في حالة الثيم
  isDarkMode = signal<boolean>(false);

  constructor() {
    // تحميل الثيم المحفوظ عند بداية التطبيق
    this.initializeTheme();

    // Effect للاستماع للتغييرات وتطبيقها
    effect(() => {
      this.applyTheme(this.isDarkMode());
    });
  }

  /**
   * تحميل الثيم المحفوظ أو استخدام تفضيلات النظام
   */
  private initializeTheme(): void {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      this.isDarkMode.set(true);
    } else if (savedTheme === 'light') {
      this.isDarkMode.set(false);
    } else {
      // إذا ما فيش ثيم محفوظ، استخدم تفضيلات النظام
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode.set(prefersDark);
    }
  }

  /**
   * تطبيق الثيم على الـ HTML element
   */
  private applyTheme(isDark: boolean): void {
    const htmlElement = document.documentElement;

    if (isDark) {
      htmlElement.classList.add('dark-theme');
      htmlElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.remove('dark-theme');
      htmlElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }

  /**
   * تبديل بين Light و Dark mode
   */
  toggleTheme(): void {
    this.isDarkMode.update(value => !value);
  }

  /**
   * تفعيل الوضع الداكن
   */
  setDarkMode(isDark: boolean): void {
    this.isDarkMode.set(isDark);
  }

  /**
   * الحصول على الثيم الحالي
   */
  getCurrentTheme(): 'light' | 'dark' {
    return this.isDarkMode() ? 'dark' : 'light';
  }
}
