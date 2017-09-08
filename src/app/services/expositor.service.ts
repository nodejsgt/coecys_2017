import { Injectable } from '@angular/core';
import { Expositor } from '../classes/expositor';
import { Exposicion } from '../classes/exposicion';
import { EXPOSITORES } from '../mocks/expositores-mock';
import 'rxjs/add/operator/toPromise';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ExpositorService {
  expositores:Expositor[] = EXPOSITORES;
  expositoresUrl:string = "https://expositores-coecys2017.firebaseio.com/expositores.json";
  expositorUrl:string = "https://expositores-coecys2017.firebaseio.com/expositores";
  headers = new Headers( {'Content-Type': 'application/json'});

  constructor(
    private http:Http
  ) { }

  // Servicios con Firebase
  private handleError(error:any):Promise<any> {
        console.error(`Ha ocurrido un error:`);
        console.log(error);
        return Promise.reject(error.message || error);
    }

  getExpositores():Promise<Expositor[]> {
    return this.http.get(this.expositoresUrl, this.headers)
                    .toPromise()
                    .then(response => {
                      return response.json();
                    })
                    .catch(this.handleError);
  }

  getExpositorById(expositorId:string):Promise<Expositor> {
    let expositor:Expositor;
    return this.http.get(`${this.expositorUrl}/${expositorId}.json`, this.headers)
                    .toPromise()
                    .then(response => {
                      return response.json();
                    })
                    .catch(this.handleError);
  }

  updateExpositor(expositor:Expositor, expositorId:string):Promise<Expositor> {
    let body =  JSON.stringify(expositor);
    return this.http.put(`${this.expositorUrl}/${expositorId}.json`,body,this.headers)
                    .toPromise()
                    .then(response => {
                      return response.json();
                    })
                    .catch(this.handleError);
  }
  

  addExposicion(expositorId:string, expositor:Expositor) {
    let body = JSON.stringify(expositor);
    return this.http.put(`${this.expositorUrl}/${expositorId}.json`, body, this.headers)
                    .toPromise()
                    .then(response => {
                      return response.json();
                    })
                    .catch(this.handleError);
  }

}
