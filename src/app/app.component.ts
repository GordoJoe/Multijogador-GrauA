import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import "pixi";
import "p2";
import * as Phaser from "phaser-ce";


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
