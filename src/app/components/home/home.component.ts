import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.services';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
  export class HomeComponent implements OnInit {
  
    @Input() movieId!: number; 
    topMovies:any = [];
    carrusellMovies=[];
    first : boolean = false;
    
    constructor(private movieService: HomeService,private router:Router) { }
  

    ngOnInit(): void {
        this.TopRatedMoviesCarrousel();
    }

    TopRatedMoviesCarrousel(): any {
        this.movieService.getTopRatedMovies().subscribe(data => {
            this.topMovies = data['results'];
        })
    }

      PrimerItem(item){
        if(item.id==this.topMovies[0].id){
            return true;
        }else{
            return false;
        }
      }
  }