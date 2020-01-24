import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { DmScreenComponent } from "./dm/dm-screen.component";

const routes: Routes = [
    {
      component: HomeComponent,
      path: "",
    },
    {
      component: DmScreenComponent,
      path: "creature"
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
