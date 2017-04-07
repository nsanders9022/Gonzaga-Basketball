import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { PlayersService } from '../players.service';
import { Players } from '../players.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PlayersService]
})
export class AdminComponent implements OnInit {

  constructor(private playersService: PlayersService) { }

  ngOnInit() {
  }

  submitForm(name: string, position: string,  number: number, height: number, year: string, image: string, details: string ) {
    var newPlayer: Players = new Players(name, position, number, height, year, image, details);
    this.playersService.addPlayer(newPlayer);
  }
}
