import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Forfait } from './forfait';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  voyagesUrl = 'https://forfaits-voyages.herokuapp.com/api/forfaits';


  constructor(private http: HttpClient) { }

  getVoyages(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.voyagesUrl);  
  }

}
