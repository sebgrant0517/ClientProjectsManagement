import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-clientprojects',
  templateUrl: './clientprojects.component.html',
  styleUrls: ['./clientprojects.component.css']
})
export class ClientprojectsComponent implements OnInit{
  constructor(private projectService: ProjectService, private _router: Router) {}
  public projects: Project[] | undefined;

  ngOnInit(): void {
    this.getProjects();
  }

  clientName = {
    cName: "" + sessionStorage.getItem('clientName')
  }

  public getProjects(): void{
    this.projectService.getProjects(this.clientName.cName).subscribe(
      (response: Project[]) =>{
        this.projects = response;
        console.log(this.projects);
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    )
  }

  public deleteProject(id : number): void{
    this.projectService.deleteProject(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getProjects();
      },
      (error: HttpErrorResponse) => {
        this.getProjects();
      }
    );
  }

  public addProject(): void{
    this._router.navigateByUrl('/clients/projects/add');
  }

  public updateProject(name : string, client : string, id : number): void{
    sessionStorage.setItem('projectID', id.toString());
    sessionStorage.setItem('projectName', name);
    sessionStorage.setItem('projectClient', client);
    this._router.navigateByUrl('/clients/projects/update');
  }
}
