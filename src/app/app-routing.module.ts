import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent }        from "./components/home/home.component";
import { WorksComponent }       from "./components/works/works.component";
import { TagsComponent }        from "./components/tags/tags.component";
import { WorkDetailComponent }  from "./components/work-detail/work-detail.component";
import { TagDetailComponent }   from "./components/tag-detail/tag-detail.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'works', component: WorksComponent},
  {path: 'tags', component: TagsComponent},
  {path: 'works/:title', component: WorkDetailComponent},
  {path: 'tags/:topic', component: TagDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
