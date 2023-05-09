import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { NgForm } from '@angular/forms';
import { ClientService } from '../client.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit{
  constructor(private clientService: ClientService) {}
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

  public addClient(addForm: NgForm): void {
    document.getElementById('add-client-form')!.click();
    addForm.value.client_id = -1;
    addForm.value.client_pdf = "pdf";
    this.clientService.addClient(addForm.value).subscribe(
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
  }
}
