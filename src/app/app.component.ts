import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public title = "Rant Warriors";
  public result = "Waiting To Shoot";
  public toss = 100;
  public currentLoc = 100;
  public progress = 0;

  private progressStarted = false;
  private interval;
  private progressInterval;

  @HostListener("window:keyup", ["$event"])
  public keyUp(event: any) {
    if (event.code === "Space") {

      if (!this.progressStarted) {
        this.reset();
        this.progressStarted = true;

        this.progressInterval = setInterval(() => {
          this.progress = this.progress + 3;

          if (this.progress >= 600) {
            this.progressStarted = false;
            clearInterval(this.progressInterval);
          }
        }, 20);
      } else {
        this.progressStarted = false;
        clearInterval(this.progressInterval);
        this.throw(this.progress * 3);
      }
    }
  }

  public throw(value?: number): void {
    if (!value) {
      this.toss = Math.floor(Math.random() * 1800);
    } else {
      this.toss = value;
    }

    this.interval = setInterval(() => {
      this.currentLoc = this.currentLoc + 15;

      if (this.currentLoc >= this.toss) {
        clearInterval(this.interval);

        if (this.toss >= 1514 && this.toss <= 1564) {
          this.result = "YOU MADE IT!!! YAY!!!!";
        }

        if (this.toss < 1514) {
          this.result = "YOU MISSED!!!! TO Short!";
        }

        if (this.toss > 1564) {
          this.result = "YOU MISSED!!!! To Far!";
        }
      }
    }, 20);
  }

  public reset(): void {
    this.currentLoc = 100;
    this.progress = 0;
  }
}
