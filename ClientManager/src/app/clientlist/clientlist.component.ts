import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent implements OnInit{
  constructor(private clientService: ClientService, private _router: Router) {}
  public clients: Client[] | undefined;

  ngOnInit(): void {
    this.getClients();
  }

  public getClients(): void{
    this.clientService.getClients().subscribe(
      (response: Client[]) =>{
        this.clients = response;
        console.log(this.clients);
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    )
  }

  public updateClient(name : string, pdf : string, id : number): void{
    sessionStorage.setItem('clientID', id.toString());
    this._router.navigateByUrl('/clients/update');
  }

  public deleteClient(id : number): void{
    this.clientService.deleteClient(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getClients();
      },
      (error: HttpErrorResponse) => {
        this.getClients();
      }
    );
  }

  public addClient(): void{
    this._router.navigateByUrl('/clients/add');
  }

  public projects(name : string): void{
    sessionStorage.setItem('clientName', name);
    this._router.navigateByUrl('/clients/projects');
  }

}
