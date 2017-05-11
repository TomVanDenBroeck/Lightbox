import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-light-box-one-single',
  templateUrl: './light-box-one-single.component.html',
  styleUrls: ['./light-box-one-single.component.css']
})
export class LightBoxOneSingleComponent implements OnInit {

  LB0_ImagePath : string = "https://ae01.alicdn.com/kf/HTB1_FztNXXXXXc0XFXXq6xXFXXXJ/Super-Hero-Microfiber-Bath-font-b-Towel-b-font-serviette-de-plage-toalha-Sport-Drying-Travel.jpg";
  
  slideIndex0: any = 1;

onClick(event) {
  console.log("Openen");
  console.log(document.getElementById('myModal0'));
  document.getElementById('myModal0').style.display = "block";  
}

closeModal() {
  console.log("Sluiten");
  document.getElementById('myModal0').style.display = "none";
}

openModal(event) {
  document.getElementById('myModal0').style.display = "block";
}

showSlides(slideIndex0);

showSlides(n: any) {
  console.log("showslidesStart");
  let i;
  let slides = document.getElementsByClassName("mySlides0");   //.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");

  let i1 = document.getElementById("Img0");
   

  if (n > slides.length) {this.slideIndex0 = 1}  
  
  if (n < 1) {this.slideIndex0 = slides.length}
  
  console.log("n < 1 - slideindex after2: " + this.slideIndex0);  
  console.log("n < 1 - after2: " + n);
 
  
  for (i = 0; i < slides.length; i++) {
    
  
    window.getComputedStyle(slides[i]).display === 'none';

  
    console.log("na none");
  }
  for (i = 0; i < dots.length; i++) {
  
    if (dots.length > 0){
       dots[i].className = dots[i].className.replace(" active", "");
       console.log("class van dots" + i + ": " + dots[i].className);
    }
    console.log("na active");
  }

  
  getComputedStyle(slides[this.slideIndex0-1]).display === 'block';
    
 
  if (this.slideIndex0 == 1) 
  {
    console.log("komt in 1");  
    i1.style.display = 'block';   
  }
  
  

  console.log("Slides: 2 - " + getComputedStyle(slides[this.slideIndex0-1]).display);
  dots[this.slideIndex0-1].className += " active";

  console.log("Slides: 3 - " + window.getComputedStyle(dots[this.slideIndex0-1]));
  
 
  captionText.innerHTML = dots[this.slideIndex0-1].getAttribute("alt");
  console.log(captionText.innerHTML);
 

 

}

currentSlide(n: any) {
  console.log("*** Currentslide aangeroepen met slide " + n);
  this.showSlides(this.slideIndex0 = n);
}



  constructor() { }

  ngOnInit() {
  }

}
