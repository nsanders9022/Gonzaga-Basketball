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

  addPlayer(newPlayer: Players) {
    this.players.push(newPlayer);
  }

  updatePlayer(localUpdatedPlayer) {
    var playerEntryInFirebase = this.getPlayerById(localUpdatedPlayer.$key);
    playerEntryInFirebase.update({name: localUpdatedPlayer.name,
                                  position: localUpdatedPlayer.position,
                                  number: localUpdatedPlayer.number,
                                  height: localUpdatedPlayer.height,
                                  year: localUpdatedPlayer.year,
                                  image: localUpdatedPlayer.image,
                                  details: localUpdatedPlayer.details
                                })
  }

  deletePlayer(localPlayerToDelete) {
    var playerEntryInFirebase = this.getPlayerById(localPlayerToDelete.$key);
    playerEntryInFirebase.remove();
  }
}
