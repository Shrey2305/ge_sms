import { Component } from '@angular/core';
import { Product } from '../../models/Product.model';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-jelly-page',
  templateUrl: './jelly-page.component.html',
  styleUrl: './jelly-page.component.css'
})
export class JellyPageComponent {
  jellyProducts: Product[];

  constructor(private productService: ProductService, private router: Router) {
    this.jellyProducts = this.productService.getProductsByCategory('jelly');
  }

  viewDetails(product: Product) {
    this.router.navigate(['/products', product.id]);
  }
}
