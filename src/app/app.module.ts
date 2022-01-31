import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Template Imports
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
//Movies Imports
import { PopularMovieComponent } from './components/movies/popular.component';
import { ViewMovieComponent } from './components/movies/view.component';
import { ActorsComponent } from './components/movies/actors.component';
import { SimilarMoviesComponent } from './components/movies/similar.component';
//ActorImports
import { PopularActorsComponent } from './components/actors/popularActors.component';
import { actorViewComponent } from './components/actors/actorView.component';
import { MoviesMakedComponent } from './components/actors/moviesMaked.component';
//Post Modules
import { IndexPostComponent } from './components/posts/index-post.component';
import { EditPostComponent } from './components/posts/edit-post.component';
import { NewPostComponent } from './components/posts/new-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PopularMovieComponent,
    ViewMovieComponent,
    ActorsComponent,
    SimilarMoviesComponent,
    PopularActorsComponent,
    actorViewComponent,
    MoviesMakedComponent,
    IndexPostComponent, 
    EditPostComponent, 
    NewPostComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }