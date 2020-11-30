import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {

const headers = new HttpHeaders({
  'Authorization' : 'Bearer BQAeGTkAOeqLv9P7E9c6SG3DL_WfOsz0lgg8s5XVmYiIgisXdDbKlADhYi5y4QMuIgRf4hsOxcOMs01eka8'
})


    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers } );
  }

  // tslint:disable-next-line: typedef
  getArtista( termino: string ) {

const headers = new HttpHeaders({
  'Authorization' : 'Bearer BQAeGTkAOeqLv9P7E9c6SG3DL_WfOsz0lgg8s5XVmYiIgisXdDbKlADhYi5y4QMuIgRf4hsOxcOMs01eka8'
})


    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`,{ headers } );
  }

}
