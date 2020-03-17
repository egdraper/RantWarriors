import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireDatabase } from "@angular/fire/database";
import { DbSessionService } from "./assets/dbSession";
import { ActivatedRoute, Router } from "@angular/router";
import { DbService } from "./assets/dbService";

@Component({
    selector: "dm-screen",
    templateUrl: "./dm-screen.component.html",
    styleUrls: ["./dm-screen.component.scss"]
  })
  export class DmScreenComponent {
    constructor(
      private dbSessionService: DbSessionService,
      private dbService: DbService,
      private activatedRoute: ActivatedRoute,
      private router: Router,
    ) {
      this.activatedRoute.queryParams.subscribe(params => {
        const gameName = params["game"];
        this.dbSessionService.loadGameSession(gameName);
      });
    }

    public logOut(): void {
      this.dbService.signOut();
      this.router.navigate(["/"]);
    }

  }
