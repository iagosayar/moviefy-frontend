import { Component, OnInit, Input } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import { Router } from '@angular/router';
import { MovieI } from '../../models/movie.interface';
import { HomeService } from 'src/app/services/home.services';
import { ActorsService } from 'src/app/services/actors.service';

@Component({
    selector: 'home-wrapper',
    templateUrl: './homeWrapper.component.html',
    styleUrls: ['./homeWrapper.component.css']
  })
  export class HomeWrapperComponent implements OnInit {
  
    @Input() movieId!: number; 
    arrayOf:any = []
    
    
    constructor(private movieService: HomeService,private prueba: ActorsService,private router:Router) { }
  
    // Se ejecuta cuanto se crea el compoment
    ngOnInit(): void {
      //cargamos las principales
      this.showStreamTv();
    }

    showStreamTv(){
        this.movieService.getStreamingTv().subscribe(data => {
        this.arrayOf = data["results"];
      })
    }
    showCinemaMovies(){
      this.movieService.getCinemaMovies().subscribe(data => {
        this.arrayOf = data["results"];

      })
    }
    showTvMovies(): any{
      this.movieService.getTvPopular().subscribe(data => {
        this.arrayOf = data["results"];
      })
    }

    viewMovie(id){
      this.router.navigate(['/movie', id ]);
    }
  }