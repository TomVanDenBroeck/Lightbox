import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';

import { LightboxImage } from './lightbox.types';

@Component({
  selector: 'aui-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // only re-render component if inputs have changed, see https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html
})
export class LightboxComponent {
  // see https://angular.io/docs/ts/latest/cookbook/component-communication.html
  @Input() images: LightboxImage[] = [];
  @Output() close = new EventEmitter();

  public slideIndex: number = 0;
  public lightboxActive: boolean = false;

  toggleLightbox(visible: boolean, index?: number): void {
    this.lightboxActive = visible;

    if (index !== undefined) {
      this.setActiveImage(index);
    }

    if (!this.lightboxActive) {
      this.close.emit(); // emit the close event, see https://toddmotto.com/component-events-event-emitter-output-angular-2
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


