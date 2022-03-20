import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { LeftSideContainerComponent } from './left-side-container/left-side-container.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [LeftSideContainerComponent, MenuHeaderComponent, MenuComponent],
  imports: [CommonModule, AppRoutingModule, MatListModule, MatRippleModule, MatButtonModule],
  exports: [
    LeftSideContainerComponent,
    MenuHeaderComponent,
    MenuComponent,
    // MatListModule,
    // MatRippleModule,
    // MatButtonModule,
  ],
})
export class WrapperModule {}
