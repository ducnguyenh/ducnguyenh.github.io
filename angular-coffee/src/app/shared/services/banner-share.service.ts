import { Injectable, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerShareService {
  dataService: ElementRef;
  private bannerDataSubject = new BehaviorSubject<ElementRef>(this.dataService);
  getBanner$ = this.bannerDataSubject.asObservable();

  // send banner
  sendBannerToComponent(data: ElementRef) {
    this.bannerDataSubject.next(data);
    this.dataService = data;
    // console.log('service ', data);
  }

  constructor() {
  }
}
