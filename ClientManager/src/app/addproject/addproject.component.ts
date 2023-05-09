import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent {
  constructor(private projectService: ProjectService) {}
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
    document.getElementById('add-projects-form')!.click();
    addForm.value.projects_id = -1;
    addForm.value.projects_client = this.clientName.cName;
    this.projectService.addProject(addForm.value).subscribe(
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
  }
}
