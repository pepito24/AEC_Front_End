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
  voyagesUrl = 'https://forfaits-voyages.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  getVoyages(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.voyagesUrl + 'forfaits/' + 'da/1996478');  
  }

  updateVoyage(forfait: Forfait): Observable<any> {
    const id = forfait._id;
    return this.http.put<Forfait>(this.voyagesUrl + 'forfaits/' + id, forfait, httpOptions);
  }

  addVoyage(forfait: Forfait): Observable<Forfait> {
    return this.http.post<Forfait>(this.voyagesUrl + 'forfaits',forfait, httpOptions);
  }

  deleteVoyage(idForfait: string): Observable<Forfait> {
      return this.http.delete<Forfait>(this.voyagesUrl + 'forfaits/' + idForfait, httpOptions);
  }
}
