import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  namePage: string;
  constructor(
    private router: Router,
  ) {
    this.namePage = this.router.url.replace(/[^a-zA-Z ]/g, ' ').trim();
  }

  ngOnInit() {
  }

}
