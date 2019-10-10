import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drink-menu',
  templateUrl: './drink-menu.component.html',
  styleUrls: ['./drink-menu.component.scss']
})
export class DrinkMenuComponent implements OnInit {
  namePage: string;
  constructor(
    private router: Router,
  ) {
    this.namePage = this.router.url.replace('/', '');
  }

  ngOnInit() {}


}
