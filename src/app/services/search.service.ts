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
        let address= this.getAddressSimple("/search/multi");    
        address=this.addqueryParams(address,title);
        return this.http.get(address);
    }
    searchMovie(title) : any{
        let address= this.getAddressSimple("/search/movie")  
        address=this.addqueryParams(address,title);  
        return this.http.get(address);
    }
    searchTvMovie(title) : any{
        let address= this.getAddressSimple("/search/tv");    
        address=this.addqueryParams(address,title);
        console.log(address);
        return this.http.get(address);
    }  
//END BY TITLE

searchdiscoverMovies(region?,year?) : any{
    let address= this.getAddressSimple("/discover/movie"); 
    address=this.addqueryParams(address,undefined,region);   
    console.log(address);
    return this.http.get(address);
} 
//ADDRESS FORMAT
getAddressSimple(path) : string{
    return this.apiURL + path + "?api_key=" + this.apiKey + "&language=es";
}
addqueryParams(url,title?,region?,year?){

if(title){
    url+="&query="+title;
}
if(region){
    url+="&region="+region;
}
if(year){
    url+="&primary_release_year="+year;
}
return url;
}


}
