import { Component } from '@angular/core';

import { LightboxImage } from './lightbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public images: LightboxImage[] = [{
    src: 'https://ae01.alicdn.com/kf/HTB1_FztNXXXXXc0XFXXq6xXFXXXJ/Super-Hero-Microfiber-Bath-font-b-Towel-b-font-serviette-de-plage-toalha-Sport-Drying-Travel.jpg',
    name: 'image'
  }, {
    src: 'https://m.elitestatic.com/m/19d8a4853690ed15/800x400-chriss.jpg',
    name: 'image'
  }, {
    src: 'http://geofilms.tv/wp-content/uploads/sites/33/2015/07/ironMan3.jpg',
    name: 'image'
  }, {
    src: 'http://ugc.reveliststatic.com/gen/constrain/800/800/80/2016/11/09/15/ot/8e/phdlcfm6802qbwe.jpg',
    name: 'image'
  }];

  onCloseLightBox() {
    console.log('lightbox closed');
  }
}
