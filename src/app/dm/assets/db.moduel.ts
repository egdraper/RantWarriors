import { NgModule } from "@angular/core";
import { DbService } from "./dbService";
import { DbSessionService } from "./dbSession";

@NgModule({
  providers: [DbService, DbSessionService]
})
export class DBModule {}
