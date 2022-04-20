import { Component } from '@angular/core';
import { Globals } from "../../globals";
import { Tag } from "../../models/tag";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags: Tag[] = Globals.tags;

  constructor() {
  }

}
