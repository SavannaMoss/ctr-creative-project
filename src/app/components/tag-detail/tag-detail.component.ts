import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Globals } from "../../globals";
import { Tag } from "../../models/tag";

@Component({
  selector: 'app-tag-detail',
  templateUrl: './tag-detail.component.html',
  styleUrls: ['./tag-detail.component.css']
})
export class TagDetailComponent implements OnInit {
  tags: Tag[] = Globals.tags;
  tagDetail!: Tag;

  constructor(private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    // find values by topic
    this.getValues();
  }

  getValues(): void {
    const topic = String(this.route.snapshot.paramMap.get('topic'));

    for (let i = 0; i < this.tags.length; i++) {
      if (this.tags[i].topic == topic) {
        this.tagDetail = {
          topic: topic,
          works: this.tags[i].works
        };
        break;
      }
    }
  }

  goBack(): void {
    this.location.back();
  }

}
