import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryImagesService {
  itemsGallery = [
    // tslint:disable-next-line: max-line-length
    { id: 1, src: 'assets/images/gallery2/g1.jpg', alt: 'g1', title: 'this is test text' },
    { id: 2, src: 'assets/images/gallery2/g2.jpg', alt: 'g2', title: 'this is test text' },
    { id: 3, src: 'assets/images/gallery2/g3.jpg', alt: 'g3', title: 'this is test text' },
    { id: 4, src: 'assets/images/gallery2/g4.jpg', alt: 'g4', title: 'this is test text' },
    { id: 5, src: 'assets/images/gallery2/g5.jpg', alt: 'g5', title: 'this is test text' },
    { id: 6, src: 'assets/images/gallery2/g6.jpg', alt: 'g6', title: 'this is test text' },
    { id: 7, src: 'assets/images/gallery2/g7.jpg', alt: 'g7', title: 'this is test text' },
    { id: 8, src: 'assets/images/gallery2/g8.jpg', alt: 'g8', title: 'this is test text' },
    { id: 9, src: 'assets/images/gallery2/g9.jpg', alt: 'g9', title: 'this is test text' }
  ];

  constructor() { }
}
