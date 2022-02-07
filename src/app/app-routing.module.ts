import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesPopularComponent } from './components/movies/moviesPopular.component';
import { MovieDescriptionComponent } from './components/movies/movieDescription.component';
import { ActorsPopularComponent } from './components/actors/actorsPopular.component';
import { IndexPostComponent } from './components/posts/index-post.component';
import { EditPostComponent } from './components/posts/edit-post.component';
import { NewPostComponent } from './components/posts/new-post.component';
import { ActorDescriptionComponent } from './components/actors/actorsDescription.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  //Movies Paths
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesPopularComponent },
  { path: 'movie/:id', component: MovieDescriptionComponent },
  //Actor Paths
  { path:'actors', component:ActorsPopularComponent},
  { path: 'actor/:id' , component: ActorDescriptionComponent},
  //Post Paths
  { path: 'posts', component: IndexPostComponent },
  { path: 'post/new', component: NewPostComponent },
  { path: 'post/:postId/edit', component: EditPostComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
