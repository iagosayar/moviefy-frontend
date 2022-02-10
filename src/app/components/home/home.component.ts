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
    images:any = [];
    
    constructor(private homeService: HomeService,private router:Router) { }
  

    ngOnInit(): void {
         this.GetPhotos();
    }
    GetPhotos() : any{
         this.homeService.getRandomPhotos(3).subscribe(data=>{
           data.forEach(peli => {
             this.images.push(peli['urls']['regular']);
         });
         })
    }
  }