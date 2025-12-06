 import { NgClass } from '@angular/common';
import { Component, Input, OnInit, OnDestroy, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { SideNav } from '../side-nav/side-nav';

export interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  imports: [NgClass, MatButtonModule, MatIcon],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
  providers:[SideNav]
})
export class Carousel implements OnInit   {

  @Input({ required: true }) images: carouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = true;
  @Input() slideInterval = 3000;

  selectedIndex: number = 0;
servicesSideNav=inject(SideNav);

  ngOnInit(): void {
    if (this.autoSlide) {
this.autoSlideImages();
    }
  }

  autoSlideImages():void{
    setInterval(()=>{
      this.onNextClick();
    },this.slideInterval);
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

  selectedImage(index: number): void {
    this.selectedIndex = index;
  }
}
