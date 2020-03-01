import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DmScreenComponent } from "./dm/dm-screen.component";
import { AuthService } from "./home/auth";

const routes: Routes = [
  {
    path: "creature",
    canActivate: [AuthService],
    component: DmScreenComponent
  },
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
