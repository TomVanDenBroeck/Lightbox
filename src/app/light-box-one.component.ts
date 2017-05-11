import { Component, OnInit, Input } from '@angular/core';

import { AppComponent } from './app.component';

@Component({
  selector: 'app-light-box-one',
  templateUrl: './light-box-one.component.html',
  styleUrls: ['./light-box-one.component.css']
})
export class LightBoxOneComponent implements OnInit {

/*LB1_ImagePath : string = "data:image/jpeg;base64,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";
LB2_ImagePath : string = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQF6DrKllcP_06qzCqZzpSxH6D7w4bonm5OhM67cjHm33bKSelEvQ";
LB3_ImagePath : string = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSDS7n7Q0e9oh_BaRZ83UBGeeSAlgV1u7cjs6_weCHQPZw7YyIWDA";
LB4_ImagePath : string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ETLhsQ1UBvhA_nT0OF3GK5x-kOJNOeYHjqjbM_FF0TQVXOQs";*/


LB1_ImagePath : string = "https://ae01.alicdn.com/kf/HTB1_FztNXXXXXc0XFXXq6xXFXXXJ/Super-Hero-Microfiber-Bath-font-b-Towel-b-font-serviette-de-plage-toalha-Sport-Drying-Travel.jpg";
LB2_ImagePath : string = "https://m.elitestatic.com/m/19d8a4853690ed15/800x400-chriss.jpg";
LB3_ImagePath : string = "http://d152j5tfobgaot.cloudfront.net/wp-content/uploads/2015/06/yourstory-What-can-entrepreneurs-learn-from-Iron-Man.jpg";
LB4_ImagePath : string = "http://ugc.reveliststatic.com/gen/constrain/800/800/80/2016/11/09/15/ot/8e/phdlcfm6802qbwe.jpg";

slideIndex: any = 1;
//let dom = new BrowserDomAdapter();


onClick(event) {
  console.log("Openen");
  document.getElementById('myModal').style.display = "block";
  //this.showSlides(1);
}

closeModal() {
  console.log("Sluiten");
  document.getElementById('myModal').style.display = "none";
}

openModal(event) {
  document.getElementById('myModal').style.display = "block";
}

showSlides(slideIndex);

showSlides(n: any) {
  console.log("showslidesStart");
  let i;
  let slides = document.getElementsByClassName("mySlides");   //.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");

  let i1 = document.getElementById("Img1");
  let i2 = document.getElementById("Img2");
  let i3 = document.getElementById("Img3");
  let i4 = document.getElementById("Img4");

 

  //console.log("n = " + n);
  //console.log("slides lenght " + slides.length);

  console.log("slideindex before: " + this.slideIndex);
  console.log("n before: " + n);
  console.log("slide lenght: " + slides.length);

  if (n > slides.length) {this.slideIndex = 1}  
  
  console.log("n > slides.length - slideindex after: " + this.slideIndex);  
  console.log("n > slides.length - after: " + n);

  if (n < 1) {this.slideIndex = slides.length}
  
  console.log("n < 1 - slideindex after2: " + this.slideIndex);  
  console.log("n < 1 - after2: " + n);
 
  
  for (i = 0; i < slides.length; i++) {
    //console.log("voor none " + i + " -  ");
    
    //console.log("ervoor: " + getComputedStyle(slides[i]).display);

  

    //console.log("i: " + i);
    //console.log("slides: " + slides[i]);
  
    window.getComputedStyle(slides[i]).display === 'none';

    //console.log("erna: " + window.getComputedStyle(slides[i]).visibility);

     

    console.log("na none");
  }
  for (i = 0; i < dots.length; i++) {
    //console.log("voor active");
    if (dots.length > 0){
       dots[i].className = dots[i].className.replace(" active", "");
       console.log("class van dots" + i + ": " + dots[i].className);
    }
    console.log("na active");
  }

  //console.log("Slides: 1 - " + getComputedStyle(slides[this.slideIndex-1]).display);
  getComputedStyle(slides[this.slideIndex-1]).display === 'block';
    
  //console.log("index = " + this.slideIndex);  
  //console.log("n = " + n);  
  if (this.slideIndex == 1) 
  {
    console.log("komt in 1");  
    i1.style.display = 'block';
    i2.style.display = 'none';
    i3.style.display = 'none';
    i4.style.display = 'none';
  }
  
  if (this.slideIndex == 2) 
  {
    console.log("komt in 2");
    i1.style.display = 'none';
    i2.style.display = 'block';
    i3.style.display = 'none';
    i4.style.display = 'none';
  }

  if (this.slideIndex == 3) 
  {
    console.log("komt in 3");
    i1.style.display = 'none';
    i2.style.display = 'none';
    i3.style.display = 'block';
    i4.style.display = 'none';
  }

  if (this.slideIndex == 4) 
  {
    console.log("komt in 4");
    i1.style.display = 'none';
    i2.style.display = 'none';
    i3.style.display = 'none';
    i4.style.display = 'block';
  }

  //console.log("image1.display = " + i1.style.display); 
  //console.log("image2.display = " + i2.style.display); 
  //console.log("image3.display = " + i3.style.display); 
  //console.log("image4.display = " + i4.style.display); 

  console.log("Slides: 2 - " + getComputedStyle(slides[this.slideIndex-1]).display);
  dots[this.slideIndex-1].className += " active";

  console.log("Slides: 3 - " + window.getComputedStyle(dots[this.slideIndex-1]));
  
 
  captionText.innerHTML = dots[this.slideIndex-1].getAttribute("alt");

 

  console.log("showslidesEnd");

}


plusSlides(n: any) {
  console.log("*** plusSlides met slide " + n);
  this.showSlides(this.slideIndex += n);
}

currentSlide(n: any) {
  console.log("*** Currentslide aangeroepen met slide " + n);
  this.showSlides(this.slideIndex = n);
}


@Input() ResImagePath: string = "";

  constructor() { 
  }

  ngOnInit() {

    
  }


  @Input()
  set ImpagePath(name: string) {
    this.ResImagePath = name;
  }


}  


