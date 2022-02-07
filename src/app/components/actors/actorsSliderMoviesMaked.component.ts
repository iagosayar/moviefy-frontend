import { Component, OnInit,Input } from '@angular/core';
import { ActorsService } from 'src/app/services/actors.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-moviesMaked',
  templateUrl: './actorsSliderMoviesMaked.component.html',
  styleUrls: ['./actorsSliderMoviesMaked.component.css']
})
export class ActorsSliderMoviesMakedComponent implements OnInit {

  @Input() personId!: number; 
  movieMaked:any = [];

  constructor( private movieMakedService:ActorsService, private router:Router) { }

  ngOnInit(): void {
    this.movieMakedService.getMovieMaked(this.personId).subscribe(data => {
      this.movieMaked = data["cast"];

      //recorremos array buscamos elementossin foto y los eliminamos
      this.movieMaked.forEach(movie => {
        console.log(movie.poster_path);
        //eliminamos los elementos sin foto del array
        if(movie.poster_path==null){
          this.movieMaked.splice(this.movieMaked.indexOf(movie));
        }
      });
     
   }) 
 }
 viewMovie(id){
  this.router.navigate(['/movie', id ]);
}
}
