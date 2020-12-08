import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ReturnStatement } from '@angular/compiler';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery( query:string ){
    const url: any = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBXjkZF57jWiWT4xf64cilSOHrNRHfBFU1hK1R4clQhyvrjRhDjLXToQg6k4kdB-qMZP6WobYyBvB64oEg'});
      return this.http.get(url, { headers });

  }




  getNewReleases() {
    return this.getQuery(`browse/new-releases`)
               .pipe( map( data => data['albums'].items ));
              }

          // tslint:disable-next-line: max-line-length
          //  this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers }). esto es lo que se simplifico en el getQuery para no repetir tanto codigo.

  // tslint:disable-next-line: typedef
  getArtista( termino: string ) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
               .pipe( map( data => data['artists'].items ));
              }

    // this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`,{ headers } ) esto se resumio en el getQuery .

  //             .pipe( map( data =>{return data['artists'].items; })); esta es la misma funcion de arriba

}
