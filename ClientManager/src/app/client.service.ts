import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  'Access-Control-Allow-Origin': '*'
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){ }

  public addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.apiServerUrl}/clients`, client);
  }

  public updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.apiServerUrl}/clients`, client);
  }

  public getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiServerUrl}/clients`);
  }

  public getClient(client_id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiServerUrl}/clients/${client_id}`);
  }

  public deleteClient(client_id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/clients/${client_id}`);
  }
}