import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { HeroComponent } from './hero/hero.component';
import { ArticleComponent } from './article/article.component';
import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './banner/banner.component';
import { ServicesComponent } from './services/services.component';
import { AuthComponent } from './auth/auth.component';

const components = [
  HomeComponent,
  AboutComponent,
  HeroComponent,
  ArticleComponent,
];
@NgModule({
  declarations: [...components, BannerComponent, ServicesComponent, AuthComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [...components],
})
export class HomeModule {}
