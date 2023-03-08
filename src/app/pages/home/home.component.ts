import { Component } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { LocationService } from 'src/app/services/location.service';
import { EpisodeService } from 'src/app/services/episode.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private CharacterService: CharacterService,
    private LocationService: LocationService,
    private EpisodeService: EpisodeService
    ) {}
  
  charactersList: any;
  characters: any;
  locationsList: any;
  locations: any;
  episodesList: any;
  episodes: any
  
  async ngOnInit() {
    this.charactersList = await this.CharacterService.getCharacters();
    let rndInt = this.getRandomNumbers(2,this.charactersList.info.count);
    this.characters = this.CharacterService.getMultipleCharacters(rndInt);
    this.locationsList = await this.LocationService.getLocations();
    rndInt = this.getRandomNumbers(2,this.locationsList.info.count);
    this.characters = this.LocationService.getMultipleLocations(rndInt);
    this.episodesList = await this.EpisodeService.getEpisodes();
    rndInt = this.getRandomNumbers(2,this.episodesList.info.count);
    this.characters = this.EpisodeService.getMultipleEpisodes(rndInt);
    console.log('characters',this.characters);
  }

  getRandomNumbers(i: number,number: number) {
    let rndInt = ''
    for( let b = 0; b < i; b++){
      if(b !== 0){
        rndInt += ','
      }
      rndInt += Math.floor(Math.random() * number+1).toString();
    }
    return rndInt
  }
}
