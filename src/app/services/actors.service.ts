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
getAddressPag(path, page):string{
    return this.apiURL + path + "?api_key=" + this.apiKey + "&language=es"+"-MX&page="+page;
}

//With Pagination
getPopularActors(page) : any{
  let address = this.getAddressPag('/person/popular',page);
  return this.http.get(address);
}
//Without Pagination
getActorsDetails(actor_id) : any{
  let address= this.getAddress('/person/' + actor_id);
  return this.http.get(address);
}
getMovieMaked(person_id) : any{
  let address= this.getAddress("/person/"+ person_id+ "/movie_credits");
  return this.http.get(address);
}

}