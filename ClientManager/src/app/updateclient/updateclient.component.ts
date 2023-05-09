import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css']
})
export class UpdateclientComponent implements OnInit{
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

  public updateClient(addForm: NgForm): void {
    document.getElementById('update-client-form')!.click();
    addForm.value.client_id = sessionStorage.getItem('clientID');
    addForm.value.client_pdf = "pdf";
    this.clientService.updateClient(addForm.value).subscribe(
      (response: Client) => {
        console.log(response);
        this.getClients();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
      this._router.navigateByUrl("/clients");
  }
}
