import { BannerComponent } from './components/banner/banner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    TopHeaderComponent,
    BreadCrumbComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    TopHeaderComponent,
    BreadCrumbComponent,
    NgbModule
  ]
})
export class SharedModule { }
