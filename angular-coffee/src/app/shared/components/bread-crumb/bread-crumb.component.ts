import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit, AfterViewInit {
  sticky = false;
  display = 'none';
  elementPosition: any;

  // tslint:disable-next-line: no-input-rename
  @Input('currentPages') currentPages: string;
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
    if (this.currentPages === 'Angular Café' || this.currentPages === 'Home') {
      this.display = 'none';
    } else {
      this.display = 'block';
    }
  }

}
