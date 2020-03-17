import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AssetManagementComponent } from "./asset-management/asset-management.component";
import { AdminComponent } from "./admin.component";

@NgModule({
  declarations: [AssetManagementComponent, AdminComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
