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
  namePage = 'gallery';

  constructor(
    private galleryImagesService: GalleryImagesService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data => {
      const alt = data.get('slug');
      console.log('alt detail', alt);

      this.imageDetail = this.galleryImagesService.itemsGallery
        .filter(item => {
          console.log('item', item);
          return item.alt === alt;
        });
    });
  }

  onCloseHandled() {
    this.location.back();
  }

}
