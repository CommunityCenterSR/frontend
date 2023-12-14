import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{

  images: string[] = [
    'assets/images/communityCenter-02.jpg',
    'assets/imagesGallery/imagen3.jpg',
    'assets/imagesGallery/imagen6.jpg',
  ];

  currentIndex: number = 0;

  ngOnInit(): void {
     this.changeImage(this.currentIndex)
  }

  changeImage(index: number) {
    this.currentIndex = index;
    setInterval(() => {
      this.currentIndex++
      if(this.currentIndex >= this.images.length || this.currentIndex < 0) this.currentIndex = 0
    }, 5000);
  }

  nextImage(){
    this.currentIndex--
  }

  previousImage(){
    this.currentIndex++
  }
  
}
