import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  currentPages: string;
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.currentPages = this.router.url.replace('/', '');
    console.log('url ', this.currentPages);
  }

}
