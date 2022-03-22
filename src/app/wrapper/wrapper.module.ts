import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { LeftSideContainerComponent } from './left-side-container/left-side-container.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { WrapperService } from './wrapper.service';

@NgModule({
  declarations: [
    LeftSideContainerComponent,
    MenuHeaderComponent,
    MenuComponent,
    HeaderContainerComponent,
    HeaderTitleComponent,
  ],
  imports: [CommonModule, AppRoutingModule, MatListModule, MatRippleModule, MatButtonModule],
  exports: [
    LeftSideContainerComponent,
    MenuHeaderComponent,
    MenuComponent,
    HeaderContainerComponent,
  ],
  providers: [WrapperService]
})
export class WrapperModule {}
