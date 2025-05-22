import { Component } from '@angular/core';

import * as AOS from 'aos'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  
  banners = [
    'assets/banner1.jpg',
    'assets/banner2.jpg'
  ];
  currentBanner = this.banners[0];
  bannerIndex = 0;

  fullText = 'Welcome to Our Wellness Store';
  printedText = '';
  typingIndex = 0;

  ngOnInit(): void {
    AOS.init();
    this.startBannerRotation();
    this.startTypingAnimation();
  }

  startBannerRotation() {
    setInterval(() => {
      this.bannerIndex = (this.bannerIndex + 1) % this.banners.length;
      this.currentBanner = this.banners[this.bannerIndex];
    }, 5000); // every 5 seconds
  }

  startTypingAnimation() {
    const typingInterval = setInterval(() => {
      if (this.typingIndex < this.fullText.length) {
        this.printedText += this.fullText[this.typingIndex];
        this.typingIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // speed of typing
  }
}
