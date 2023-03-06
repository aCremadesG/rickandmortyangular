import { Component } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private CharacterService: CharacterService,
    ) {}
  
  characters: any;
  
  async ngOnInit() {
    this.characters = this.CharacterService.getCharacters();
    console.log('characters',this.characters);
  }
}
