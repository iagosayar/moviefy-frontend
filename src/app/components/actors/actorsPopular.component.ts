import { Component, OnChanges, OnInit } from '@angular/core';
import {ActorsService} from '../../services/actors.service';
import { ActivatedRoute, NavigationStart, Router, Event } from "@angular/router";
import { ActorI } from '../../models/actor.interface';


@Component({
  selector: 'app-popular',
  templateUrl: './actorsPopular.component.html',
  styleUrls: ['./actorsPopular.component.css']
})

export class ActorsPopularComponent implements OnInit{

popularActors:any=[];
page:number = 1;
totalPage!:number;

constructor(
  private actorService:ActorsService,
  private route: ActivatedRoute,
  private router: Router)
{}

ngOnInit(): void {
  this.fillActorsData();
  this.router.events.subscribe((event: Event) => {
    if (event instanceof NavigationStart) {
      this.fillActorsData();
    }
  });
}

fillActorsData(){
  // this.route.queryParams.subscribe(params => {
  //   this.page = params['page'] || 1;
  // });
  console.log(this.page)
  this.actorService.getPopularActors(this.page).subscribe(data =>{
    this.popularActors=data['results'];
    this.fillKnowByData();
  })  

}
fillKnowByData() {
  this.popularActors.forEach(actor => {
    actor['known_by']=[];
    actor['known_for'].forEach(peli => {
    actor['known_by'].push(peli.title);
    });
  });
}

nextPage(){
  let conv = Number(this.page) + 1;
  let new_page = String(conv);
  console.log("nueva pagina será: " + new_page)
  this.router.navigate(['/actors'], { queryParams: { page: new_page}});  
}
prevPage(){
  this.router.navigate(['/movie', 634649 ]);
  // if (this.page>1){
  //   this.router.navigate(['/actors/'], { queryParams: { page: this.page-1}, queryParamsHandling: 'merge' });  
  // }
}



viewActor(id){
  this.router.navigate(['/actor', id ]);
}



}

