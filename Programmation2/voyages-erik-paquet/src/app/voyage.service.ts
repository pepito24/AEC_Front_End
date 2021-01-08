import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Forfait } from './forfait';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  voyagesUrl = 'https://forfaits-voyages.herokuapp.com/api/forfaits';


  constructor(private http: HttpClient) { }

  getVoyages(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.voyagesUrl);  
  }

  updateVoyage(forfait: Forfait): Observable<any> {
    const id = forfait.destination;
    return this.http.put<Forfait>(this.voyagesUrl + 'forfait/' + id, forfait, httpOptions);
}


  addVoyage(forfait: Forfait): Observable<Forfait> {
    return this.http.post<Forfait>(this.voyagesUrl + 'forfait', forfait, httpOptions);
  }


  /** DELETE: suppression du héros */
  deleteVoyage(destination: string): Observable<Forfait> {
      return this.http.delete<Forfait>(this.voyagesUrl + 'forfait/' + destination, httpOptions);
  }


}
