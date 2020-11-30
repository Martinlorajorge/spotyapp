import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  nuevasCanciones: any[] = [];

  constructor( private spotyfy: SpotifyService ) {

    this.spotyfy.getNewReleases()
        .subscribe( (data: any) => {
          //  console.log(data.albums.items);
           this.nuevasCanciones = data;
         });


   }



}
