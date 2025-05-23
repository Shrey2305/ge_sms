// product.model.ts
export interface Product {
  id: number;
  name: string;
  category: 'jelly' | 'scrap' | 'yarn' | 'fertiliser';
  description: string;
  image: string;
  price: number;

  weight?: string;            // for jelly
  material?: string;          // for scrap
  color?: string;             // for yarn
  composition?: string;       // for fertiliser
  origin?: string;
  usage?: string;
  [key: string]: any; 
}
