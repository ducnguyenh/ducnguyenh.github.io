import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit, AfterViewInit {
  sticky = false;
  display = 'none';
  elementPosition: any;
  currentPages: string;

  @ViewChild('stickyMenu', { static: true }) stickyMenu: ElementRef;

  constructor(
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.elementPosition = this.stickyMenu.nativeElement.offsetTop;
  }

  @HostListener('window: scroll', ['$event']) handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.elementPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  receivevePages($event) {
    this.currentPages = $event;
    if (this.currentPages !== 'Home') {
      this.display = 'block';
    } else {
      this.display = 'none';
    }
  }

}
