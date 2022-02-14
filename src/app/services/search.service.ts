import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  apiURL:string = environment.movieApiUrl;
  apiKey:string = environment.movieApiKey;

  constructor(private http:HttpClient) { }

//BY TITLE
    searchAll(title){
        let address= this.getAddress("/search/multi")+"&query="+title;    
        return this.http.get(address);
    }
    searchMovie(title) : any{
        let address= this.getAddress("/search/movie")+"&query="+title;    
        return this.http.get(address);
    }
    searchTvMovie(title) : any{
        let address= this.getAddress("/search/tv")+"&query="+title;    
        return this.http.get(address);
    }  
//END BY TITLE

//ADDRESS FORMAT
getAddress(path) : string{
    return this.apiURL + path + "?api_key=" + this.apiKey + "&language=es";
}


}
