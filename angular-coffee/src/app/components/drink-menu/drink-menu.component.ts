import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { BannerShareService } from '../../shared/services/banner-share.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-drink-menu',
  templateUrl: './drink-menu.component.html',
  styleUrls: ['./drink-menu.component.scss']
})
export class DrinkMenuComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  receiveBanner: ElementRef;

  constructor(
    private bannerShareService: BannerShareService,
  ) { }

  ngOnInit() {
    this.subscription = this.bannerShareService.getBanner$
      .subscribe(banner => {
        this.receiveBanner = banner;
      });

    console.log('receive ', this.receiveBanner);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
