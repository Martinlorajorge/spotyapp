import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {

const headers = new HttpHeaders({
  'Authorization' : 'Bearer BQDkyXNh9vm3Qu6jLpif1MONTNFyTe4u5N0NY1dMP9lkdx_pkr01FCdAqDlFG63qWER9IdBHqD4mywfGu9o'
})


    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers } );

  }
}
