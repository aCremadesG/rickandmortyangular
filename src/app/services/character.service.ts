import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  apiURL = environment.apiUrl

  constructor(
    private http: HttpClient,
    ) {}
    
  async getCharacters(){
    return await lastValueFrom(this.http.get(this.apiURL+'/api/character'));
  }

  async getCharacter(id: string){
    return await lastValueFrom(this.http.get(this.apiURL+'/api/character'+id));
  }

  // async filterCharacters(filters){
  //   return await lastValueFrom(this.http.post(this.apiURL+'/api/character'){filters});
  // }
}
