import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menus = [
    { name: 'home', routerLink: '/' },
    { name: 'about us', routerLink: '/about-us' },
    { name: 'services', routerLink: '/services' },
    { name: 'menu', routerLink: '/menu' },
    { name: 'gallery', routerLink: '/gallery' },
    { name: 'contact us', routerLink: '/contact-us' }
  ];

  isToggle = false;

  ngOnInit() {
  }

  toggle() {
    this.isToggle = !this.isToggle;
  }

}
