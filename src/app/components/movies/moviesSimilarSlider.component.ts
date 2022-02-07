import { Component, OnInit, Input } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import { Router } from '@angular/router';
import { MovieI } from '../../models/movie.interface';

@Component({
  selector: 'app-similar-movies',
  templateUrl: 'moviesSimilarSlider.component.html',
  styleUrls: ['moviesSimilarSlider.component.css']
})
export class MoviesSimilarSliderComponent implements OnInit {

  @Input() movieId!: number; 
  similarMovies:any = []
  
  constructor(private movieService: MoviesService,private router:Router) { }

  // Se ejecuta cuanto se crea el compoment
  ngOnInit(): void {
     this.movieService.getSimilarMovies(this.movieId).subscribe(data => {
      this.similarMovies = data["results"];
    }) 
    this.similarMovies.forEach(movie => {
      //eliminamos los elementos sin foto del array
      if(movie.poster_path==null){
        this.similarMovies.splice(this.similarMovies.indexOf(movie));
      }
    });
  }
  viewMovie(id){
    this.router.navigate(['/movie', id ]);
  }
}