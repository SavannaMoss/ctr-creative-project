import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { WorksComponent } from './components/works/works.component';
import { TagsComponent } from './components/tags/tags.component';
import { AuthorDetailComponent } from './components/author-detail/author-detail.component';
import { WorkDetailComponent } from './components/work-detail/work-detail.component';
import { TagDetailComponent } from './components/tag-detail/tag-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthorsComponent,
    WorksComponent,
    TagsComponent,
    AuthorDetailComponent,
    TagDetailComponent,
    WorkDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
