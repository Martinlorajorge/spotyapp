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
      'Authorization' : 'Bearer BQDJph95MsT8J9yYp6-pF2qjGrr4Fo7J_Hf4AY5G8oB8bRlmlq-eaM2qOytrBX1A1Y-HWq_fsn6LCosFP8c'});
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
    return this.getQuery(`artists/${ id }`)
              //  .pipe( map( data => data['artists'].items ));
              }




}
