import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-actors',
  templateUrl: './castSlider.component.html',
  styleUrls: ['./castSlider.component.css']
})
export class CastSliderComponent implements OnInit {

  @Input() movieId!: number; 
  actorsMovie:any = [];
  workersMovie:any = [];



  constructor( private movieService:MoviesService,private router:Router) { }

  ngOnInit(): void {
    this.movieService.getActorsMovie(this.movieId).subscribe(data => {
      //recojemos el valor de crew()
      this.workersMovie = data["crew"];
      data["cast"].forEach(worker => {  
            this.workersMovie.push(worker);
      });
      console.log(this.workersMovie);
}) 
   
 }



 viewActor(id){
  this.router.navigate(['/actor', id ]);
}
}
