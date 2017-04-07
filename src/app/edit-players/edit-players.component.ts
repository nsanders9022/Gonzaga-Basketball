import { Component, Input, OnInit } from '@angular/core';
import { Players } from '../players.model';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-edit-players',
  templateUrl: './edit-players.component.html',
  styleUrls: ['./edit-players.component.css'],
  providers: [PlayersService]
})
export class EditPlayersComponent implements OnInit {
  @Input() selectedPlayer;

  constructor(private playersService: PlayersService) { }

  ngOnInit() {
  }

  beginUpdatingPlayer(playerToUpdate) {
    this.playersService.updatePlayer(playerToUpdate);
  }

  beginDeletingPlayer(playerToDelete) {
    if(confirm("Are you sure you want to delete this player from the team?")) {
      this.playersService.deletePlayer(playerToDelete);
    }
  }

}
