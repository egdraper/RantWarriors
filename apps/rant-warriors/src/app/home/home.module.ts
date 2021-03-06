import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./home.component";
import { DemoMaterialModule } from "../utils/material.module";
import { AuthService } from "../utils/auth";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { CreateGameComponent } from "./landing-page/create-game/create-game.component";
import { LoadGameComponent } from "./landing-page/load-game/load-game.component";
import { DBModule } from "../utils/db.module";
import { AdminService } from "../utils/admin.service";
import { AdminModule } from "../admin/admin.module";

@NgModule({
  declarations: [
    HomeComponent,
    LandingPageComponent,
    CreateGameComponent,
    LoadGameComponent
  ],
  exports: [HomeComponent],
  imports: [
    DBModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    DemoMaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    AdminService,
    AuthService
  ]
})
export class HomeModule {}
