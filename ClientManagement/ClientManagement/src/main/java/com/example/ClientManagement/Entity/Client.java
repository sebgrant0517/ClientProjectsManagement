package com.example.ClientManagement.Entity;

import jakarta.persistence.*;
import org.springframework.web.multipart.MultipartFile;

@Entity
@Table(name = "client_table")
public class Client {
    @Id
    @Column(name = "client_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int client_id;
    @Column(name = "client_name")
    public String client_name;
    @Column(name = "client_pdf")
    public String client_pdf;

    public Client(){
        client_name = "Empty";
        client_pdf = "Empty";
    }
    public Client(String name, String pdf){
        client_name = name;
        client_pdf = pdf;
    }

    public int getClient_id(){return client_id;}
    public String getClient_name(){return client_name;}
    public String getClient_pdf(){return client_pdf;}
    public void setClient_name(String name){client_name = name;}
}
