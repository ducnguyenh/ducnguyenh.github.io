import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./components/about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: 'all-services',
    loadChildren: () => import('./components/all-services/all-services.module').then(m => m.AllServicesModule)
  },
  {
    path: 'drink-menu',
    loadChildren: () => import('./components/drink-menu/drink-menu.module').then(m => m.DrinkMenuModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./components/gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./components/contact-us/contact-us.module').then(m => m.ContactUsModule)
  },

  { path: '', redirectTo: '/', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
