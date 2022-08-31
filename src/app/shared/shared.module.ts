import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

const components = [FooterComponent, NavbarComponent, NotFoundComponent];
@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule, ScrollToModule.forRoot()],
  exports: [...components],
})
export class SharedModule {}
