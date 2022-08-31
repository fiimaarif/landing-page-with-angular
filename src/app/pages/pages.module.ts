import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeModule } from './home/home.module';
import { PageRoutingModule } from './page-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, HomeModule, HomeRoutingModule, PageRoutingModule],
  exports: [PagesComponent],
})
export class PagesModule {}
