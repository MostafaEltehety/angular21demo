import {
  Component,
  computed,
  ElementRef,
  inject,
  signal,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from './services/theme';
import { Greetings } from './greetings/greetings';
import { ElementBgColor } from './element-bg-color';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Greetings, ElementBgColor],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  collabse = signal(false);
  sidenavWidth = computed(() => (this.collabse() ? '60px' : '250px'));
  translate = inject(TranslateService);
  curentLanguage = signal('ar');
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

  toggle() {
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

  SwitchLang() {
    const newLang = this.curentLanguage() === 'ar' ? 'en' : 'ar';
    this.curentLanguage.set(newLang);
    this.translate.use(newLang);
    this.updateDirection(newLang);

    // Save the selected language in localStorage
    localStorage.setItem('language', newLang);
  }

  // Theme toggle method
  toggleTheme() {
    this.themeService.toggleTheme();
  }

  // Get theme tooltip text
  getThemeTooltip() {
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
  getThemeIcon(): string {
    return this.themeService.isDarkMode() ? 'light_mode' : 'dark_mode';
  }

  ///////////////////// @ViewChild() Decorator /////////////////////
  //Example 01 (HTML Element)
  // @ViewChild(Template Reference Variable)
  // @ViewChild('productName')
  // productNameInput!: ElementRef;
  //or
  @ViewChild('productName') productNameInput!: ElementRef;

  focusProdName() {
    this.productNameInput.nativeElement.focus();
  }

  @ViewChildren('productInput') productInputs!: Array<ElementRef>;
  setProductInputBorders(): void {
    this.productInputs.forEach((productInput) => {
      productInput.nativeElement.style.border = '3px solid blue';
    });
  }
  //Example 02 (Child Component)
  // @ViewChild(Greetings)
  // greetings!: Greetings;
  @ViewChild(Greetings) greetings!: Greetings;

  callGreetUserMethodFromGreetings(): void {
    this.greetings.greetUser();
  }

  @ViewChildren(Greetings) allGreetings!: Array<Greetings>;
  callGreetUserMethodFromAllGreetings(): void{
    this.allGreetings.forEach(greeting => greeting.greetUser());
  }

  //Example 03 (Directive)
  @ViewChild(ElementBgColor) elementBgColor!: ElementBgColor;
  makeBeige(): void {
    this.elementBgColor.setColor('beige');
  }

  // @ViewChildren(ElementBgColor)
  // allElementsBgColor!: Array<ElementBgColor>;
  @ViewChildren(ElementBgColor) allElementsBgColor!: Array<ElementBgColor>;

  makeMultipleCoral(){
    this.allElementsBgColor.forEach(elBgColor => elBgColor.setColor('coral'));
  }
  ////////////////////////////////////////////////////////////////////
}
