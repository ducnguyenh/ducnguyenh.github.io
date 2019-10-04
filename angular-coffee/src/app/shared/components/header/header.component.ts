import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';

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
  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.elementPosition = this.stickyMenu.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.elementPosition) {
      this.sticky = true;
      console.log('true ', this.sticky);
    } else {
      this.sticky = false;
      console.log('false ', this.sticky);
    }
    }

  toggle() {
    this.isToggle = !this.isToggle;
  }
}
