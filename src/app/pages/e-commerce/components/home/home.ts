import { Component, inject, signal } from '@angular/core';
import { product } from '../../../../models/e-commerce/product';
import { MatCardImage, MatCardModule } from '@angular/material/card';
import { TextTrimPipe } from '../../pipes/text-trim-pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { CurrencyPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
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

  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  router = inject(Router);

  products = signal<product[]>([
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      price: 49.99,
      category: 'Electronics',
      image:
        'https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0880.jpg?auto=webp&quality=75&width=1024',
      stock: 32,
    },
    {
      id: 2,
      name: 'Smart LED TV 55 Inch',
      price: 699.99,
      category: 'Electronics',
      image: 'https://m.media-amazon.com/images/I/71CCbu6PLmL._AC_SL1500_.jpg',
      stock: 12,
    },
    {
      id: 3,
      name: "Men's Running Shoes",
      price: 59.99,
      category: 'Fashion',
      image: 'https://sc04.alicdn.com/kf/Haebb5ef2c8354c308608863737a9ebc0k.jpg',
      stock: 75,
    },
    {
      id: 4,
      name: 'Gaming Laptop',
      price: 1199.99,
      category: 'Computers',
      image:
        'https://i.rtings.com/assets/pages/6dRuEBex/best-gaming-laptops-20242028-medium.jpg?format=auto',
      stock: 8,
    },
    {
      id: 5,
      name: 'Classic Leather Wallet',
      price: 25.99,
      category: 'Accessories',
      image: 'https://m.media-amazon.com/images/I/91m4V4txjzL._AC_SX300_SY300_QL70_ML2_.jpg',
      stock: 100,
    },
    {
      id: 6,
      name: 'Portable Power Bank 20000mAh',
      price: 34.99,
      category: 'Electronics',
      image:
        'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/43/3950301/1.jpg?5425',
      stock: 60,
    },
    {
      id: 7,
      name: 'Digital Wrist Watch',
      price: 19.99,
      category: 'Fashion',
      image: 'https://m.media-amazon.com/images/I/71JSM9kTEwS._AC_SL1500_.jpg',
      stock: 46,
    },
    {
      id: 8,
      name: 'Office Chair Ergonomic',
      price: 129.99,
      category: 'Furniture',
      image: 'https://m.media-amazon.com/images/I/61yOUl49vRL.jpg',
      stock: 22,
    },
    {
      id: 9,
      name: 'Stainless Steel Water Bottle',
      price: 12.99,
      category: 'Home',
      image:
        'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/06/2876331/1.jpg?3316',
      stock: 150,
    },
    {
      id: 10,
      name: 'Wireless Keyboard & Mouse',
      price: 39.99,
      category: 'Computers',
      image: 'https://m.media-amazon.com/images/I/81KZLendeML._AC_SL1500_.jpg',
      stock: 28,
    },
  ]);

  goToDetailes(id: number) {
    this.router.navigate(['/blank/product-details', id]);
  }
}
