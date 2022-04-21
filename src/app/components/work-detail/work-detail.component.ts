import { Component }      from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location }       from "@angular/common";
import { Globals }        from "../../globals";
import { Work }           from "../../models/work";

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent {
  works: Work[] = Globals.works;
  workDetail!: Work;

  constructor(private route: ActivatedRoute,
              private location: Location) {
    route.params.subscribe(val => {
      // find values by work title
      this.getValues();
    });
  }

  getValues(): void {
    const title = String(this.route.snapshot.paramMap.get('title'));
    for (let i = 0; i < this.works.length; i++) {
      if (this.works[i].title == title) {
        this.workDetail = this.works[i];
        break;
      }
    }
  }

  goBack(): void {
    this.location.back();
  }

}
