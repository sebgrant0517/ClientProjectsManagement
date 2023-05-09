import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateproject',
  templateUrl: './updateproject.component.html',
  styleUrls: ['./updateproject.component.css']
})
export class UpdateprojectComponent implements OnInit{
  constructor(private projectService: ProjectService, private _router: Router) {}
  public clients: Project[] | undefined;

  ngOnInit(): void {
    this.getProjects();
  }

  clientName = {
    cName: "" + sessionStorage.getItem('clientName')
  }

  public getProjects(): void{
    this.projectService.getProjects(this.clientName.cName).subscribe(
      (response: Project[]) =>{
        this.clients = response;
        console.log(this.clients);
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    )
  }

  public addProject(addForm: NgForm): void {
    document.getElementById('update-projects-form')!.click();
    addForm.value.projects_name = sessionStorage.getItem('projectName');
    addForm.value.projects_id = sessionStorage.getItem('projectID');
    addForm.value.projects_client = this.clientName.cName;
    this.projectService.updateProject(addForm.value).subscribe(
      (response: Project) => {
        console.log(response);
        this.getProjects();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
    this._router.navigateByUrl("/clients/projects");
  }
}
