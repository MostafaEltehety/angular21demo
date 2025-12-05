import { NgClass } from '@angular/common';
import { Component, input, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

export interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  imports: [NgClass, MatButtonModule, MatIcon],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel implements OnInit {
  intervalId: any;
  ngOnInit(): void {
if (this.autoSlide && this.images.length > 0) {
      this.startAutoSlide();
    }
  }
  onNextClick() {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
  onPrevClick() {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  @Input({ required: true }) images: carouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;
  selectedIndex: number = 0;

  selectedImage(index: number): void {
    this.selectedIndex = index;
  }

 startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }


}

