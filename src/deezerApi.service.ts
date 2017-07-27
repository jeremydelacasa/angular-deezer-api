import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class DeezerApiService {
  private searchUrl = 'https://api.deezer.com/search?output=jsonp&callback=JSONP_CALLBACK&q='
  constructor(private http: Http, private _jsonp: Jsonp){}

  search(value) {
    const url = this.searchUrl + value;
    return this._jsonp.get(url)
    .toPromise()
    .then(response => {
        return response.json();
    })
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
