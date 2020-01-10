import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatureComponent } from "./creature/creature.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    {
      component: HomeComponent,
      path: "",
    },
    {
      component: CreatureComponent,
      path: "creature"
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
