import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public makeChrisHappy(chrisWords: string): void {
    const words = chrisWords.split(" ");
    words.forEach(word => {
      const result = new Set();
      const letters = word.split("");
      for (let i = 1; i < letters.length - 1; i++) {
        result.add(letters[i]);
      }
      console.log(`${letters[0]}${result.size}${letters[letters.length - 1]}`);
    });
  }
}
