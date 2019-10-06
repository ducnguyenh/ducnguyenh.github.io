import { Component, OnInit } from '@angular/core';
import { GalleryImagesService } from '../../shared/services/gallery-images.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  imagesGallery;

  constructor(
    private galleryImagesService: GalleryImagesService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    // chunk data
    const temp = this.galleryImagesService.itemsGallery;
    this.imagesGallery = this.chunk(temp, 3);
  }

// group oject in array
  chunk(array: any, size: number) {
    const chunkedArr = [];
    let index = 0;
    while (index < array.length) {
      chunkedArr.push(array.slice(index, size + index));
      index += size;
    }
    return chunkedArr;
  }
}
