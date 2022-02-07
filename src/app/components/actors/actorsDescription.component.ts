import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ActorI } from "src/app/models/actor.interface";
import { ActorsService } from "src/app/services/actors.service";

@Component({
selector :'app-actorViews',
templateUrl: 'actorsDescription.component.html',
styleUrls:['actorsDescription.component.css']
})

export class ActorDescriptionComponent implements OnInit{
actor: any = {};
id!:number;

constructor(
    private actorService:ActorsService,
    private route: ActivatedRoute,
    private router: Router
) { }

 ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.actorService.getActorsDetails(this.id).subscribe(data => {
      this.actor = data;
      if(this.actor['gender']==1){
        this.actor['Gen']="Mujer";
      }else if(this.actor['gender']==2){
        this.actor['Gen']="Hombre";
      }else{
        this.actor['Gen']="No definido";
      }
    });
  }

 
}