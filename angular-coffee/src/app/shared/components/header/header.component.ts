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

  @ViewChild('stickyMenu', {static: true}) stickyMenu: ElementRef;
  sticky = false;
  elementPosition: any;
  currentPage: string;

  @Output() pagesEvent = new EventEmitter<string>();
  ngOnInit() {
  }

  ngAfterViewInit() {
    this.elementPosition = this.stickyMenu.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.elementPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  sendPages(event) {
    this.pagesEvent.emit(event.target.innerText);
    console.log('event ', event.target.innerText);
  }

  toggle() {
    this.isToggle = !this.isToggle;
  }
}
