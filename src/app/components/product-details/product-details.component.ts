import { Component } from '@angular/core';
import { Product } from '../../models/Product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
product !: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if(id){
      this.product = this.productService.getProductById(id);
    }
  }
}
