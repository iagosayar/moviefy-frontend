import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})

export class ActorsService{

apiURL:string = environment.movieApiUrl;
apiKey:string= environment.movieApiKey;

constructor(private http:HttpClient){}

getAddress(path):string{
    return this.apiURL + path + "?api_key=" + this.apiKey + "&language=es";
  }

getPopularActors() : any{
  let address = this.getAddress('/person/popular');
  return this.http.get(address);
}
getActorsDetails(actor_id) : any{
  let address= this.getAddress('/person/' + actor_id);
  return this.http.get(address);
}
getMovieMaked(person_id) : any{
  let address= this.getAddress("/person/"+ person_id+ "/movie_credits");
  return this.http.get(address);
}

}