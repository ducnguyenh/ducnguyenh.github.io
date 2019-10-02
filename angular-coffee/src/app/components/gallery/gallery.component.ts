import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  items = [
    // tslint:disable-next-line: max-line-length
    [{ src: 'assets/images/gallery2/g1.jpg', alt: 'g1', title: 'this is test text' },
      { src: 'assets/images/gallery2/g2.jpg', alt: 'g2', title: 'this is test text' },
      { src: 'assets/images/gallery2/g3.jpg', alt: 'g3', title: 'this is test text' }],
    [{ src: 'assets/images/gallery2/g4.jpg', alt: 'g4', title: 'this is test text' },
      { src: 'assets/images/gallery2/g5.jpg', alt: 'g5', title: 'this is test text' },
      { src: 'assets/images/gallery2/g6.jpg', alt: 'g6', title: 'this is test text' }],
    [{ src: 'assets/images/gallery2/g7.jpg', alt: 'g7', title: 'this is test text' },
      { src: 'assets/images/gallery2/g8.jpg', alt: 'g8', title: 'this is test text' },
      { src: 'assets/images/gallery2/g9.jpg', alt: 'g9', title: 'this is test text' }]
  ];
  constructor() { }

  ngOnInit() {
  }

}
