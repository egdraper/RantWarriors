import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DmScreenComponent } from "./dm/dm-screen.component";
import { AuthService } from "./home/auth";
import { LandingPageComponent } from "./home/landing-page/landing-page.component";
import { AdminComponent } from "./admin/admin.component";

const routes: Routes = [
  {
    path: "",
    canActivateChild: [ AuthService ],
    children: [
      {
        path: "creature",
        component: DmScreenComponent
      },
      {
        path: "landing",
        component: LandingPageComponent
      },
      {
        path: "admin",
        component: AdminComponent
      },
      {
        path: "",
        component: HomeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
