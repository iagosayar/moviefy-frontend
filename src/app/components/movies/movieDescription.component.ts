import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: 'movieDescription.component.html',
  styleUrls: ['movieDescription.component.css']
})
export class MovieDescriptionComponent implements OnInit {

  movie:any = {};
  id!: number;
  
  constructor(
    private movieService: MoviesService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.movieService.getMovieDetails(this.id).subscribe(data => {
      this.movie = data;
    })
  }

}