import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  apiURL = environment.apiUrl

  constructor(
    private http: HttpClient,
    ) {}
    
  async getEpisodes(){
    return await lastValueFrom(this.http.get(this.apiURL+'/api/episode'));
  }

  async getEpisode(id: string){
    return await lastValueFrom(this.http.get(this.apiURL+'/api/episode'+id));
  }

  async getMultipleEpisodes(ids: string){
    return await lastValueFrom(this.http.get(this.apiURL+'/api/episode/'+ids));
  }

  // async filterEpisodes(filters){
  //   return await lastValueFrom(this.http.post(this.apiURL+'/api/episode'){filters});
  // }
}
