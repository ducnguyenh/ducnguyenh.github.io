import { Component, OnInit } from '@angular/core';
import { GalleryImagesService } from '../../shared/services/gallery-images.service';
import { Router, ActivatedRoute } from '@angular/router';
import { url } from 'inspector';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  imagesGallery;

  constructor(
    private galleryImagesService: GalleryImagesService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.paramMap.subscribe(data => {
      const alt = data.get('gallery');
      console.log('alt detail', alt);
    });
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
