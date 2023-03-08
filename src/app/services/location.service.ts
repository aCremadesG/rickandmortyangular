import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  apiURL = environment.apiUrl

  constructor(
    private http: HttpClient,
    ) {}
    
  async getLocations(){
    return await lastValueFrom(this.http.get(this.apiURL+'/api/location'));
  }

  async getLocation(id: string){
    return await lastValueFrom(this.http.get(this.apiURL+'/api/location'+id));
  }

  async getMultipleLocations(ids: string){
    return await lastValueFrom(this.http.get(this.apiURL+'/api/location/'+ids));
  }

  // async filterLocations(filters){
  //   return await lastValueFrom(this.http.post(this.apiURL+'/api/location'){filters});
  // }
}
