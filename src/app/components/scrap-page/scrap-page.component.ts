import { Component } from '@angular/core';
import { Product } from '../../models/Product.model';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scrap-page',
  templateUrl: './scrap-page.component.html',
  styleUrl: './scrap-page.component.css'
})
export class ScrapPageComponent {
 scrapProducts: Product[];

  constructor(private productService: ProductService, private router: Router) {
    this.scrapProducts = this.productService.getProductsByCategory('scrap');
  }

  viewDetails(product: Product) {
    this.router.navigate(['/products', product.id]);
  }
}
