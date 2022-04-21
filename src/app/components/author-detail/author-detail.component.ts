import { Component }      from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location }       from '@angular/common';
import { Globals }        from "../../globals";
import { Work }           from "../../models/work";

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent {
  works: Work[] = Globals.works;
  authorDetail!: Work;

  constructor(private route: ActivatedRoute,
              private location: Location) {
    route.params.subscribe(val => {
      // find values by author
      this.getValues();
    });
  }

  getValues(): void {
    const author = String(this.route.snapshot.paramMap.get('author'));
    for (let i = 0; i < this.works.length; i++) {
      if (this.works[i].author == author) {
        this.authorDetail = this.works[i];
        break;
      }
    }
  }

  goBack(): void {
    this.location.back();
  }
}
