import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';

@Injectable()
export class ApiService {

	public api_url: string = 'http://localhost:3310';

	private timeout: number = 5000;

  	constructor(public http: Http) {}

  	public GET(url: string){
  		return this.http.get(this.api_url + url);
  	}

  	public POST(url: string, params: any){
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

  		return this.http.post(this.api_url + url, params, { headers: headers } );
  	}

  	private handleError(error) {
    	return error.json().message || { status: 'ERROR', message: 'No es posible conectarse al servidor.'};
  	}
}