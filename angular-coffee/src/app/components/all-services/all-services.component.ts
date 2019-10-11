import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.scss']
})
export class AllServicesComponent implements OnInit {
  namePage: string;
  constructor(
    private router: Router,
  ) {
    this.namePage = this.router.url.replace(/[^a-zA-Z ]/g, ' ').trim();
  }

  ngOnInit() {
  }

}
