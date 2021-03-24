import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { AddAssetModule } from "../dm-tools/assets-portal/add-asset.module";
import { DemoMaterialModule } from "../utils/material.module";

@NgModule({
  declarations: [AdminComponent],
  imports: [
    AddAssetModule,
    CommonModule,
    DemoMaterialModule,
  ]
})
export class AdminModule { }
