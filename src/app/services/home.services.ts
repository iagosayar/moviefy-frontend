import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn:'root'
})

export class HomeService{

apiURL:string = environment.movieApiUrl;
apiKey:string= environment.movieApiKey;

constructor(private http:HttpClient){}

getAddress(path):string{
    return this.apiURL + path + "?api_key=" + this.apiKey + "&language=es";
}

//Without Pagination
getTvPopular() : any{
  let address= this.getAddress('/tv/popular/');
  return this.http.get(address);
}
getStreamingTv() : any{
    let address= this.getAddress('/tv/airing_today');
    return this.http.get(address);
  }
getCinemaMovies() : any{
  let address= this.getAddress("/movie/now_playing");
  console.log( address);

  return this.http.get(address);
}
getTopRatedMovies(){

  let address= this.getAddress("/movie/top_rated");
  return this.http.get(address);
  
}



}