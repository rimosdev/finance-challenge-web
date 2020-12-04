import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAgency } from '../models/agency';


@Injectable()
export class AgenciesService {

  constructor(private http: HttpClient) { }

  getAgencies() {
    return this.http.get<IAgency[]>(`${environment.apiUrl}/agencies`);
  }

}
