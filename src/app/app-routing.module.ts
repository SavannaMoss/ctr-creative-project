import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthorsComponent } from "./components/authors/authors.component";
import { WorksComponent } from "./components/works/works.component";
import { TagsComponent } from "./components/tags/tags.component";
import { AuthorDetailComponent } from "./components/author-detail/author-detail.component";
import { WorkDetailComponent } from "./components/work-detail/work-detail.component";
import { TagDetailComponent } from "./components/tag-detail/tag-detail.component";

const routes: Routes = [
  { path: 'authors', component: AuthorsComponent},
  { path: 'works', component: WorksComponent},
  { path: 'tags', component: TagsComponent},
  { path: 'authors/:author', component: AuthorDetailComponent},
  { path: 'works/:title', component: WorkDetailComponent},
  { path: 'tags/:topic', component: TagDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
