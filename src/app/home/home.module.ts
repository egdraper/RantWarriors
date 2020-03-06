import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./home.component";
import { DemoMaterialModule } from "../dm/material.module";
import { AuthService } from "./auth";
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [HomeComponent, LandingPageComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    DemoMaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService
  ]
})
export class HomeModule {}
