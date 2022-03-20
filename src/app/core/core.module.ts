import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionsComponent } from './promotions/promotions.component';

@NgModule({
  declarations: [PromotionsComponent],
  imports: [CommonModule],
  exports: [PromotionsComponent],
})
export class CoreModule {}
