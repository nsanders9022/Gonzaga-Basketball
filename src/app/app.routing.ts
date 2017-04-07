import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { AboutComponent } from './about/about.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PlayersComponent
  } ,
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'players/:id',
    component: PlayerDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
