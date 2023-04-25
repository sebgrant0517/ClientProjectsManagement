package genspark.ClientProjectManagement.Entity;

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
    public byte[] client_pdf;

    public Client(String name, MultipartFile pdf){
        client_name = name;
        try {
            client_pdf = pdf.getBytes();
        } catch (Exception e){
            System.out.println(e.getMessage());
        }
    }

    public int getClient_id(){return client_id;}
    public String getClient_name(){return client_name;}
    public byte[] getClient_pdf(){return client_pdf;}
    public void setClient_name(String name){client_name = name;}
}
