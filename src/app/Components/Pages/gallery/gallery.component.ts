import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {


  
}
// Variables
var gallery = document.querySelector('.gallery');
var galleryItems = document.querySelectorAll('.gallery-item');
var numOfItems = gallery.children.length;
var itemWidth = 23; 

var featured = document.querySelector('.featured-item');

var leftBtn = document.querySelector('.move-btn.left');
var rightBtn = document.querySelector('.move-btn.right');
var leftInterval;

var scrollRate = 0.2;
var left;

function selectItem(e) {
    if (e.target.classList.contains('active')) return;

    featured.style.backgroundImage = e.target.style.backgroundImage;

    for (var i = 0; i < galleryItems.length; i++) {
        if (galleryItems[i].classList.contains('active'))
            galleryItems[i].classList.remove('active');
    }

    e.target.classList.add('active');
}

function galleryWrapLeft() {
    var first = gallery.children[0];
    gallery.removeChild(first);
    gallery.style.left = -itemWidth + '%';
    gallery.appendChild(first);
    gallery.style.left = '0%';
}

function galleryWrapRight() {
    var last = gallery.children[gallery.children.length - 1];
    gallery.removeChild(last);
    gallery.insertBefore(last, gallery.children[0]);
    gallery.style.left = '-23%';
}

function moveLeft() {
    left = left || 0;

    leftInterval = setInterval(function() {
        gallery.style.left = left + '%';

        if (left > -itemWidth) {
            left -= scrollRate;
        } else {
            left = 0;
            galleryWrapLeft();
        }
    }, 1);
}

function moveRight() {
    left = left || 0;

    leftInterval = setInterval(function() {
        gallery.style.left = left + '%';

        if (left < 0) {
            left += scrollRate;
        } else {
            left = -itemWidth;
            galleryWrapRight();
        }
    }, 1);
}

function stopMovement() {
    clearInterval(leftInterval);
}

rightBtn.addEventListener('mouseenter', moveLeft);
rightBtn.addEventListener('mouseleave', stopMovement);
leftBtn.addEventListener('mouseenter', moveRight);
leftBtn.addEventListener('mouseleave', stopMovement);

// Inicializa la galería
(function init() {
    var images = [
        './images/imagen_grande.jpg', // Entrada CIC
        './images/imagen1.jpg',
        './images/imagen2.jpg',
        './images/imagen3.jpg',
        './images/imagen4.jpg',
        './images/imagen5.jpg',
        './images/imagen6.jpg',
        './images/imagen7.jpg',
        './images/imagen8.jpg',
        './images/imagen9.jpg',
        './images/imagen10.jpg',
        './images/imagen11.jpg',
        './images/imagen12.jpg',
        './images/imagen13.jpg',
        './images/imagen14.jpg',
    ];

    // Establece la imagen inicial
    featured.style.backgroundImage = 'url(' + images[0] + ')';

    for (var i = 0; i < galleryItems.length; i++) {
        galleryItems[i].style.backgroundImage = 'url(' + images[i] + ')';
        galleryItems[i].addEventListener('click', selectItem);
    }
})();
