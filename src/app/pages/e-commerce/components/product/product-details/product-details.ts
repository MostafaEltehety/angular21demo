import { Component, inject, OnInit } from '@angular/core';
import { ProductServices } from '../../../../../services/product-services';
import { product } from '../../../../../models/e-commerce/product';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ThemeService } from '../../../../../services/theme';
import { MatIcon } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe,MatIcon,TranslateModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails implements OnInit {
  services = inject(ProductServices);
  product!: product;
  activatedRouter = inject(ActivatedRoute);
    ServicesTheme = inject(ThemeService);
  productId: number = this.activatedRouter.snapshot.params['id'];
  ngOnInit(): void {
    this.product = this.services.getProduct(this.productId);
  }
}
