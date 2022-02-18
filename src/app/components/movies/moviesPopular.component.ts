import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import { Router } from '@angular/router';
import { MovieI } from '../../models/movie.interface';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-popular',
  templateUrl: 'moviesPopular.component.html',
  styleUrls: ['moviesPopular.component.css']
})
export class MoviesPopularComponent implements OnInit {
  public page !: number;
  movies:any = []
  filterTypeTitle!:number;
  title!:String ;
  adult!:boolean;
  region!:string



  
  constructor(private movieService: MoviesService,private searchService: SearchService, private router: Router) { }

  // Se ejecuta cuanto se crea el compoment
  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe(data => {
      this.movies = data["results"];
    })
  }

filterApply(){

    if(this.filterTypeTitle==0){
      this.searchAll(this.title);
    }else if (this.filterTypeTitle==1){
      this.searchMovie(this.title);
    }else{
      this.searchTvMovie(this.title);
    }
  

}
//SERVICES
searchAll(title){
  this.searchService.searchAll(title).subscribe(data => {
    this.movies = data["results"];
  })
}
searchMovie(title){
  this.searchService.searchMovie(title).subscribe(data => {
    this.movies = data["results"];
  })
}
searchTvMovie(title){
  this.searchService.searchTvMovie(title).subscribe(data => {
    this.movies = data["results"];
  })
}
discoverMovies(){
console.log(this.region);
  this.searchService.searchdiscoverMovies(this.region).subscribe(data => {
    this.movies = data["results"];
  })
}

//NAVIGATE
  viewMovie(id){
    this.router.navigate(['/movie', id ]);
  }

}
