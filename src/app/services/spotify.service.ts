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
      'Authorization' : 'Bearer BQAJz3RLZ0d2gmkQ2mlKIso01QEdeOHY_6_MsVrXOdNgPTwxCHaM5hpVTOC2uEBOQjXucoI7NKwSTXcGa_0'});
      return this.http.get(url, { headers });

  }




  getNewReleases() {
    return this.getQuery(`browse/new-releases`)
               .pipe( map( data => data['albums'].items ));
              }

          // tslint:disable-next-line: max-line-length
          //  this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers }). esto es lo que se simplifico en el getQuery para no repetir tanto codigo.

  // tslint:disable-next-line: typedef
  getArtistas( termino: string ) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
               .pipe( map( data => data['artists'].items ));
              }

    // this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`,{ headers } ) esto se resumio en el getQuery .

  //             .pipe( map( data =>{return data['artists'].items; })); esta es la misma funcion de arriba

  getArtista( id: string ) {
    return this.getQuery(`artists/${ id }`);
              //  .pipe( map( data => data['artists'].items ));
              }


  // tslint:disable-next-line: typedef
  getTopTracks( id: string ) {
     return this.getQuery(`artists/${ id }/top-tracks?market=es`)
                .pipe( map( data => data['tracks']));
              }



}
