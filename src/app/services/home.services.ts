import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn:'root'
})

export class HomeService{

apiMovieURL:string = environment.movieApiUrl;
apiMovieKey:string= environment.movieApiKey;
apiPhotoUrl:string =environment.unsplashUrl;
apiPhotoKey:string=environment.unsplashApiKey;


constructor(private http:HttpClient){}

getMovieAddress(path):string{
    return this.apiMovieURL + path + "?api_key=" + this.apiMovieKey + "&language=es-ES";
}

getPhotoAddress(path):string{
  return this.apiPhotoUrl+path+"&client_id="+this.apiPhotoKey;
}

//Without Pagination
getTvPopular() : any{
  let address= this.getMovieAddress('/tv/popular');
  console.log("prueba del "+ address);
  return this.http.get(address);
}
getStreamingTv() : any{
    let address= this.getMovieAddress('/tv/airing_today');
    return this.http.get(address);
  }
getCinemaMovies() : any{
  let address= this.getMovieAddress("/movie/now_playing");
  console.log( address);

  return this.http.get(address);
}
getTopRatedMovies() : any{ 

  let address= this.getMovieAddress("/movie/top_rated");
  return this.http.get(address);
}
getRandomPhotos(number) : any{
let address= this.getPhotoAddress("/photos/random?orientation=landscape&query=Cinema,Movies,Films&count="+number);
console.log(address);

return this.http.get(address);
}



}