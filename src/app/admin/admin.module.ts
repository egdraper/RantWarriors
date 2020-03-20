import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AssetManagementComponent } from "./asset-management/asset-management.component";
import { AdminComponent } from "./admin.component";
import { AddAssetModule } from "../dm/assets/add-asset/add-asset.module";

@NgModule({
  declarations: [AssetManagementComponent, AdminComponent],
  imports: [
    AddAssetModule,
    CommonModule
  ]
})
export class AdminModule { }
