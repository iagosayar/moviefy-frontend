import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Template Imports
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
//Home Imports
import { HomeComponent } from './components/home/home.component';
import { HomeWrapperComponent } from './components/home/homeWrapper.component';
//Movies Imports
import { MoviesPopularComponent } from './components/movies/moviesPopular.component';
import { MovieDescriptionComponent } from './components/movies/movieDescription.component';
import { CastSliderComponent } from './components/movies/castSlider.component';
import { MoviesSimilarSliderComponent } from './components/movies/moviesSimilarSlider.component';
//ActorImports
import { ActorsPopularComponent } from './components/actors/actorsPopular.component';
import { ActorDescriptionComponent } from './components/actors/actorsDescription.component';
import { ActorsSliderMoviesMakedComponent } from './components/actors/actorsSliderMoviesMaked.component';
//Login Modules
import { LoginButtonComponent } from './components/login/login-button/login-button.component';
import { LogoutButtonComponent } from './components/login/logout-button/logout-button.component';
import { AuthButtonComponent } from './components/login/authentication-button/authentication-button.component';
import { ProfileComponent } from './components/login/profile/profile.component';
//---imports
import { AuthModule } from '@auth0/auth0-angular';
//Post Modules
import { IndexPostComponent } from './components/posts/index-post.component';
import { EditPostComponent } from './components/posts/edit-post.component';
import { NewPostComponent } from './components/posts/new-post.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeWrapperComponent,
    MoviesPopularComponent,
    MovieDescriptionComponent,
    CastSliderComponent,
    MoviesSimilarSliderComponent,
    ActorsPopularComponent,
    ActorDescriptionComponent,
    ActorsSliderMoviesMakedComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    AuthButtonComponent,
    ProfileComponent,
    IndexPostComponent, 
    EditPostComponent, 
    NewPostComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'iagosayar.us.auth0.com',
      clientId: 'wccot3UbTulFbuQ81qytXaG91SYmhlNE',
      cacheLocation:'localstorage'
    }),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }