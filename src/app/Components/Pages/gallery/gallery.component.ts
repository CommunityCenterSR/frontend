import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{

  images: string[] = [
    'assets/imagesGallery/imagen_grande.jpg',
    'assets/imagesGallery/imagen1.jpg',
    'assets/imagesGallery/imagen2.jpg',
    'assets/imagesGallery/imagen3.jpg',
    'assets/imagesGallery/imagen4.jpg',
  ];

  currentIndex: number = 0;

  ngOnInit(): void {
     
  }

  changeImage(index: number) {
    this.currentIndex = index;
    // setInterval(() => {
    //   this.currentIndex++
    // }, 3000);
  }
  
}
