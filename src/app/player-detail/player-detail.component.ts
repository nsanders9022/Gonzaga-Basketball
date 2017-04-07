import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Players } from '../players.model';
import { FirebaseObjectObservable } from 'angularfire2';
import { PlayersService } from '../players.service';


@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
  providers: [PlayersService]
})
export class PlayerDetailComponent implements OnInit {

  playerId: string

  playerToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private playersService: PlayersService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.playerId = urlParameters['id'];
    });
    this.playerToDisplay = this.playersService.getPlayerById(this.playerId);
  }

}
