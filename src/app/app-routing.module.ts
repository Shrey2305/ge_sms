import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { JellyPageComponent } from './components/jelly-page/jelly-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ScrapPageComponent } from './components/scrap-page/scrap-page.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'products/jelly', component: JellyPageComponent },
  { path: 'products/scrap', component: ScrapPageComponent },
  { path: 'products/:id', component: ProductDetailsComponent },

  // Product subroutes
  // { path: 'products/gems', component: GemsComponent },
  // { path: 'products/herbal', component: HerbalComponent },
  // { path: 'products/others', component: OtherProductsComponent },

  // Optional: fallback route
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
