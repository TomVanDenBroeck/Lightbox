import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { LightboxImage } from './lightbox.types';

@Component({
  selector: 'aui-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent {
  @Input() images: LightboxImage[] = [];
  @Output() close = new EventEmitter();

  public slideIndex: number = 0;
  public lightboxActive: boolean = false;

  toggleLightbox(visible: boolean, index?: number): void {
    this.lightboxActive = visible;

    if (index !== undefined) {
      this.setActiveImage(index);
    }
  }

  setActiveImage(index: number) {
    this.slideIndex = index;
  }

  moveSlides(factor: number) {
    const newIndex = this.slideIndex + factor;

    if (newIndex < 0) {
      return this.slideIndex = this.images.length - 1;
    }

    if (newIndex === this.images.length) {
      return this.slideIndex = 0;
    }

    this.slideIndex = newIndex;
  }
}


