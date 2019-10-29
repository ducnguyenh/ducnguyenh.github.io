import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  menus = [
    { name: 'home', routerLink: '/' },
    { name: 'about us', routerLink: '/about-us' },
    { name: 'services', routerLink: '/services' },
    { name: 'menu', routerLink: '/menu' },
    { name: 'gallery', routerLink: '/gallery' },
    { name: 'contact us', routerLink: '/contact-us' }
  ];

  isToggle = false;
  sticky = false;
  elementPosition: any;
  currentPage: string;

  @ViewChild('stickyMenu', { static: true }) stickyMenu: ElementRef;
  @Output() pagesEvent = new EventEmitter<string>();
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.elementPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // get height header
    this.elementPosition = this.stickyMenu.nativeElement.offsetTop;
    console.log(this.stickyMenu.nativeElement.offsetTop);
    console.log(this.stickyMenu.nativeElement.offsetHeight);
  }

  toggle() {
    this.isToggle = !this.isToggle;
  }
}
