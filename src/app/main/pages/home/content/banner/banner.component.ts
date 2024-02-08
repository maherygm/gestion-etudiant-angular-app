import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  ngOnInit() {
    this.animationGsap();
  }

  animationGsap(): void {}
}
