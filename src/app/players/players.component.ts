import { Component, OnInit } from '@angular/core';
import { Players } from '../players.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { PlayersService } from '../players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [PlayersService]
})
export class PlayersComponent implements OnInit {
  players: FirebaseListObservable<any[]>;

  constructor(private router: Router, private playersService: PlayersService) { }

  ngOnInit() {
    this.players = this.playersService.getPlayers();
  }

}
