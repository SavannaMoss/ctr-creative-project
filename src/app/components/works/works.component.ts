import { Component } from '@angular/core';
import { Globals }   from "../../globals";
import { Work }      from "../../models/work";

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {
  works: Work[] = Globals.works;

  constructor() {
  }
}
