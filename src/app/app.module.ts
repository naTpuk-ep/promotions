import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatRippleModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperModule } from './wrapper/wrapper.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatRippleModule,
    BrowserAnimationsModule,
    WrapperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
