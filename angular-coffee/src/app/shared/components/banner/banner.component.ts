import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BannerShareService } from '../../services/banner-share.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @ViewChild('banner', { static: true }) banner: ElementRef;
  constructor(
    private bannerShareService: BannerShareService,
  ) { }

  ngOnInit() {
    this.bannerShareService.sendBannerToComponent(this.banner.nativeElement);
    console.log('banner', this.banner.nativeElement);
  }

}
