import { Component, inject, OnInit, signal } from '@angular/core';
import { product } from '../../../../models/e-commerce/product';
import { MatCardImage, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { CurrencyPipe, NgStyle, TitleCasePipe, UpperCasePipe} from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { carouselImage, Carousel } from '../../../../components/carousel/carousel';
import { ProductServices } from '../../../../services/product-services';
import { SideNav } from '../../../../components/side-nav/side-nav';
import { ThemeService } from '../../../../services/theme';
@Component({
  selector: 'app-home',
  imports: [
    MatCardModule,
    TitleCasePipe,
    UpperCasePipe,
    CurrencyPipe,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatExpansionModule,
    MatCardImage,
    MatFormFieldModule,
    TranslateModule,
    MatButtonModule,
    MatIcon,
    Carousel,

  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  providers: [SideNav],
})
export class Home implements OnInit {
  products: product[] = [];

  ngOnInit(): void {
    this.products = this.services.getProducts();
  }
  router = inject(Router);
  services = inject(ProductServices);
  ServicesTheme = inject(ThemeService);
  imageCarousel: carouselImage[] = [
    {
      imageSrc:
        'https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0880.jpg?auto=webp&quality=75&width=1024',
      imageAlt: 'bluetoothheadphones',
    },
    {
      imageSrc: 'https://m.media-amazon.com/images/I/71CCbu6PLmL._AC_SL1500_.jpg',
      imageAlt: '',
    },
    {
      imageSrc: 'https://sc04.alicdn.com/kf/Haebb5ef2c8354c308608863737a9ebc0k.jpg',
      imageAlt: '',
    },
    {
      imageSrc:
        'https://i.rtings.com/assets/pages/6dRuEBex/best-gaming-laptops-20242028-medium.jpg?format=auto',
      imageAlt: '',
    },
    {
      imageSrc: 'https://m.media-amazon.com/images/I/91m4V4txjzL._AC_SX300_SY300_QL70_ML2_.jpg',
      imageAlt: '',
    },
    {
      imageSrc:
        'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/43/3950301/1.jpg?5425',
      imageAlt: '',
    },
    {
      imageSrc: 'https://m.media-amazon.com/images/I/71JSM9kTEwS._AC_SL1500_.jpg',
      imageAlt: '',
    },
    {
      imageSrc: 'https://m.media-amazon.com/images/I/61yOUl49vRL.jpg',
      imageAlt: '',
    },
    {
      imageSrc:
        'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/06/2876331/1.jpg?3316',
      imageAlt: '',
    },
    {
      imageSrc: 'https://m.media-amazon.com/images/I/81KZLendeML._AC_SL1500_.jpg',
      imageAlt: '',
    },
  ];

  goToDetailes(id: number) {
    this.router.navigate(['/blank/product-details', id]);
  }
}
