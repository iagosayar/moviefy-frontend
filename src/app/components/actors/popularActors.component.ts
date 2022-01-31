import { Component, OnInit } from '@angular/core';
import {ActorsService} from '../../services/actors.service';
import { Router } from '@angular/router';
import { ActorI } from '../../models/actor.interface';

@Component({
  selector: 'app-popular',
  templateUrl: './popularActors.component.html',
  styleUrls: ['./popularActors.component.css']
})

export class PopularActorsComponent implements OnInit{

popularActors:any=[];

constructor(private actorService:ActorsService,private router:Router){}

ngOnInit(): void {
  this.actorService.getPopularActors().subscribe(data =>{
    this.popularActors=data['results'];
    this.popularActors.forEach(actor => {
      actor['known_by']=[];
      actor['known_for'].forEach(peli => {
      actor['known_by'].push(peli.title);
      });
    });
})  
}
viewActor(id){
  this.router.navigate(['/actor', id ]);
}


}

