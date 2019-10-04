import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryImagesService } from '../../../shared/services/gallery-images.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.scss']
})
export class GalleryDetailComponent implements OnInit {
  imageDetail;

  constructor(
    private galleryImagesService: GalleryImagesService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data => {
      const alt = data.get('slug');

      this.imageDetail = this.galleryImagesService.itemsGallery
        .filter(item => {
          return item.alt === alt;
        });
    });
  }

  onCloseHandled() {
    this.location.back();
  }

}
