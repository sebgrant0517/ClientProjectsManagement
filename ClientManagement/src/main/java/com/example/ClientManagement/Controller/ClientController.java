package com.example.ClientManagement.Controller;

import com.example.ClientManagement.Entity.Client;
import com.example.ClientManagement.Entity.Project;
import com.example.ClientManagement.Service.ClientService;
import com.example.ClientManagement.Service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClientController {
    @Autowired
    ClientService clientService;
    @Autowired
    ProjectService projectService;

    @GetMapping("/")
    public String home(){return "<HTML><HEAD><H1>WELCOME TO CLIENT APPLICATION</H1></HEAD></HTML>";}

    @GetMapping("/clients")
    public List<Client> getClients(){return this.clientService.getClients();}

    @GetMapping("/clients/{client_id}")
    public Client getClient(@PathVariable int client_id){return this.clientService.getClient(client_id);}

    @PostMapping("/clients")
    public Client addClient(@RequestBody Client client){
        return this.clientService.addClient(client);
    }

    @PutMapping("/clients")
    public Client updateClient(@RequestBody Client client){return this.clientService.updateClient(client);}

    @DeleteMapping("/clients/{client_id}")
    public String deleteClient(@PathVariable int client_id){return this.clientService.deleteClient(client_id);}

    @GetMapping("/projects/{client}")
    public List<Project> getProjects(@PathVariable String client){return this.projectService.getProjects(client);}

    @GetMapping("/projects/{client}/{project_id}")
    public Project getProject(@PathVariable String client, @PathVariable int project_id){return this.projectService.getProject(project_id);}

    @PostMapping("/projects")
    public Project addProject(@RequestBody Project project){return this.projectService.addProject(project);}

    @PutMapping("/projects")
    public Project updateProject(@RequestBody Project project){return this.projectService.updateProject(project);}

    @DeleteMapping("/projects/{project_id}")
    public String deleteProject(@PathVariable int project_id){return this.projectService.deleteProject(project_id);}

}
