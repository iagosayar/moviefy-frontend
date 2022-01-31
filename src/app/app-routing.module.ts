import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularMovieComponent } from './components/movies/popular.component';
import { ViewMovieComponent } from './components/movies/view.component';
import { PopularActorsComponent } from './components/actors/popularActors.component';
import { IndexPostComponent } from './components/posts/index-post.component';
import { EditPostComponent } from './components/posts/edit-post.component';
import { NewPostComponent } from './components/posts/new-post.component';
import { actorViewComponent } from './components/actors/actorView.component';


const routes: Routes = [
  { path: '', redirectTo:'popular', pathMatch:'full' },
  { path: 'popular', component: PopularMovieComponent },
  { path:'actors', component:PopularActorsComponent},
  { path: 'movie/:id', component: ViewMovieComponent },
  { path: 'actor/:id' , component: actorViewComponent},
  { path: 'posts', component: IndexPostComponent },
  { path: 'post/new', component: NewPostComponent },
  { path: 'post/:postId/edit', component: EditPostComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
