import { Injectable } from '@angular/core';
import { Players } from './players.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class PlayersService {
  players: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.players = angularFire.database.list('players');
  }

  getPlayers() {
    return this.players;
  }

  getPlayerById(playerId: string) {
    return this.angularFire.database.object('players/' + playerId);
  }

}
