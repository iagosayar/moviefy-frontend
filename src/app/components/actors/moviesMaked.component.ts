import { Component, OnInit,Input } from '@angular/core';
import { ActorsService } from 'src/app/services/actors.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-moviesMaked',
  templateUrl: './moviesMaked.component.html',
  styleUrls: ['./moviesMaked.component.css']
})
export class MoviesMakedComponent implements OnInit {

  @Input() personId!: number; 
  movieMaked:any = [];

  constructor( private movieMakedService:ActorsService, private router:Router) { }

  ngOnInit(): void {
    this.movieMakedService.getMovieMaked(this.personId).subscribe(data => {
      this.movieMaked = data["cast"];
   }) 
 }
 viewMovie(id){
  this.router.navigate(['/movie', id ]);
}
}
