import { Component, OnInit } from '@angular/core';
import { Globals } from "../../globals";
import { Work } from "../../models/work";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  works: Work[] = Globals.works;

  constructor() {
  }

  ngOnInit(): void {
  }

}
