import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  'Access-Control-Allow-Origin': '*'
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){ }

  public addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.apiServerUrl}/projects`, project);
  }

  public updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiServerUrl}/projects`, project);
  }

  public getProjects(client: string): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiServerUrl}/projects/${client}`);
  }

  public getProject(client: string, project_id: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiServerUrl}/projects/${client}/${project_id}`);
  }

  public deleteProject(project_id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/projects/${project_id}`);
  }
}