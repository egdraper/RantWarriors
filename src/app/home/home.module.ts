import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./home.component";
import { DemoMaterialModule } from "../dm/material.module";
import { AuthService } from "./auth";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { CreateGameComponent } from "./landing-page/create-game/create-game.component";
import { LoadGameComponent } from "./landing-page/load-game/load-game.component";
import { DBModule } from "../dm/assets/db.module";

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
  providers: [AuthService]
})
export class HomeModule {}
