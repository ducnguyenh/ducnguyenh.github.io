import { GalleryImagesService } from './../../shared/services/gallery-images.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  imagesBanner;
  imagesAdvertise;

  constructor(
    private images: GalleryImagesService,
  ) {
    this.imagesBanner = this.images.itemsBanner;
    this.imagesAdvertise = this.images.itemsAdvertise;
  }

  ngOnInit() { }

}
