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

  itemsBanner = [
    { id: 1, src: 'assets/images/banner-slide/slide1.jpg', alt: 'slide1', title: 'Shop coffee mơ ước' },
    { id: 1, src: 'assets/images/banner-slide/slide2.jpg', alt: 'slide2', title: 'Trải nghiệm café tuyệt đỉnh' },
    { id: 1, src: 'assets/images/banner-slide/slide3.jpg', alt: 'slide3', title: 'Shop café mơ ước' }
  ];

  itemsAdvertise = [
    { id: 1, src: 'assets/images/cocktail.jpg', alt: 'cocktail', title: 'cocktail' },
    { id: 2, src: 'assets/images/coffee.jpg', alt: 'coffee', title: 'coffee' },
    { id: 3, src: 'assets/images/hotdrink.jpg', alt: 'hot-drink', title: 'hot-drink' },
    { id: 4, src: 'assets/images/colddrink.jpg', alt: 'cold-drink', title: 'cold-drink' }
  ];

  constructor() { }
}
