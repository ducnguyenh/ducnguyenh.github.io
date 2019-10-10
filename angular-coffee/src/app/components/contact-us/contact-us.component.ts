import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  namePage: string;
  constructor(
    private router: Router,
  ) {
    this.namePage = this.router.url.replace('/', '');
  }

  ngOnInit() { }

}
