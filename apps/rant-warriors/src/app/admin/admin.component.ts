import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DbSessionService } from '../utils/dbSession';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public globalAssets = true;

  constructor(
    private router: Router,
    private dbSession: DbSessionService,
  ) { }

  public ngOnInit() {
    this.dbSession.useGenericCreatures = true;
    this.dbSession.useGenericNpcs = true;
    this.dbSession.initCreatureList();
    this.dbSession.initNpcList();
    this.dbSession.initPlayersList();
  }

  public onHomeClick(): void {
    this.router.navigate(["/landing"]);
  }
}
