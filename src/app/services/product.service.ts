import { Injectable } from '@angular/core';
import { Product } from '../models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 private products: Product[] = [
  // Jelly
  { id: 1, name: 'Strawberry Jelly', description: 'Sweet and fruity strawberry jelly.', image: 'assets/whatwedo.jpg', price: 45, category: 'jelly' },
  { id: 2, name: 'Mango Jelly', description: 'Tropical mango flavored jelly.', image: 'assets/whatwedo.jpg', price: 50, category: 'jelly' },
  { id: 3, name: 'Grape Jelly', description: 'Rich grape taste in every bite.', image: 'assets/whatwedo.jpg', price: 48, category: 'jelly' },
  { id: 4, name: 'Pineapple Jelly', description: 'Zesty pineapple jelly.', image: 'assets/whatwedo.jpg', price: 47, category: 'jelly' },
  { id: 5, name: 'Mixed Fruit Jelly', description: 'Fusion of multiple fruit flavors.', image: 'assets/whatwedo.jpg', price: 52, category: 'jelly' },
  { id: 6, name: 'Blueberry Jelly', description: 'Tangy blueberry delight.', image: 'assets/whatwedo.jpg', price: 49, category: 'jelly' },
  { id: 7, name: 'Orange Jelly', description: 'Citrusy orange flavor.', image: 'assets/whatwedo.jpg', price: 46, category: 'jelly' },
  { id: 8, name: 'Lychee Jelly', description: 'Refreshing lychee taste.', image: 'assets/whatwedo.jpg', price: 50, category: 'jelly' },

  // Scrap
  { id: 9, name: 'Metal Scrap - Iron', description: 'Recyclable iron scrap.', image: 'assets/images/scrap1.jpg', price: 120, category: 'scrap' },
  { id: 10, name: 'Plastic Scrap - PET', description: 'High-quality PET plastic scrap.', image: 'assets/images/scrap2.jpg', price: 80, category: 'scrap' },
  { id: 11, name: 'Aluminium Scrap', description: 'Lightweight and corrosion-resistant.', image: 'assets/images/scrap3.jpg', price: 150, category: 'scrap' },
  { id: 12, name: 'Copper Wire Scrap', description: 'Highly conductive copper wires.', image: 'assets/images/scrap4.jpg', price: 220, category: 'scrap' },
  { id: 13, name: 'E-Waste Scrap', description: 'Mixed electronic waste.', image: 'assets/images/scrap5.jpg', price: 100, category: 'scrap' },
  { id: 14, name: 'Battery Scrap', description: 'Used battery cells for recycling.', image: 'assets/images/scrap6.jpg', price: 90, category: 'scrap' },
  { id: 15, name: 'Rubber Scrap', description: 'Shredded rubber for reuse.', image: 'assets/images/scrap7.jpg', price: 60, category: 'scrap' },

  // Yarn
  { id: 16, name: 'Cotton Yarn - White', description: 'Pure cotton yarn for weaving.', image: 'assets/images/yarn1.jpg', price: 200, category: 'yarn' },
  { id: 17, name: 'Silk Yarn', description: 'Soft and shiny silk yarn.', image: 'assets/images/yarn2.jpg', price: 350, category: 'yarn' },
  { id: 18, name: 'Wool Yarn', description: 'Warm wool yarn for knitting.', image: 'assets/images/yarn3.jpg', price: 280, category: 'yarn' },
  { id: 19, name: 'Linen Yarn', description: 'Strong and breathable linen yarn.', image: 'assets/images/yarn4.jpg', price: 230, category: 'yarn' },
  { id: 20, name: 'Acrylic Yarn', description: 'Durable and colorful.', image: 'assets/images/yarn5.jpg', price: 150, category: 'yarn' },
  { id: 21, name: 'Polyester Yarn', description: 'Synthetic yarn for industrial use.', image: 'assets/images/yarn6.jpg', price: 180, category: 'yarn' },
  { id: 22, name: 'Blended Yarn', description: 'Mix of cotton and polyester.', image: 'assets/images/yarn7.jpg', price: 170, category: 'yarn' },

  // Fertiliser
  { id: 23, name: 'Organic Compost', description: 'Eco-friendly compost for gardening.', image: 'assets/images/fert1.jpg', price: 60, category: 'fertiliser' },
  { id: 24, name: 'Vermicompost', description: 'Nutrient-rich natural fertiliser.', image: 'assets/images/fert2.jpg', price: 75, category: 'fertiliser' },
  { id: 25, name: 'Cow Manure', description: 'Traditional fertiliser for crops.', image: 'assets/images/fert3.jpg', price: 55, category: 'fertiliser' },
  { id: 26, name: 'Neem Cake Fertiliser', description: 'Pest-repellent fertiliser.', image: 'assets/images/fert4.jpg', price: 85, category: 'fertiliser' },
  { id: 27, name: 'Bio Fertiliser', description: 'Microbial biofertiliser.', image: 'assets/images/fert5.jpg', price: 90, category: 'fertiliser' },
  { id: 28, name: 'Seaweed Fertiliser', description: 'Seaweed extract for plant growth.', image: 'assets/images/fert6.jpg', price: 95, category: 'fertiliser' },
  { id: 29, name: 'Bone Meal', description: 'Phosphorous-rich fertiliser.', image: 'assets/images/fert7.jpg', price: 70, category: 'fertiliser' },
  { id: 30, name: 'Fish Emulsion', description: 'Liquid fertiliser for vegetables.', image: 'assets/images/fert8.jpg', price: 80, category: 'fertiliser' }
];

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(p => p.category === category);
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
