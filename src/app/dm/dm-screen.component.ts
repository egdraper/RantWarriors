import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireDatabase } from "@angular/fire/database";

@Component({
    selector: "dm-screen",
    templateUrl: "./dm-screen.component.html",
    styleUrls: ["./dm-screen.component.scss"]
  })
  export class DmScreenComponent {

    // constructor(
    //   public firebase: AngularFireDatabase,
    //   private firestore: AngularFirestore
    // ) {
    //   this.firestore.collection("assets").add({what: "hohoho"});
    // }
  }
