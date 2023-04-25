package genspark.ClientProjectManagement.Controller;

import genspark.ClientProjectManagement.Service.ClientService;
import genspark.ClientProjectManagement.Service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClientController {
    @Autowired
    ClientService clientService;
    @Autowired
    ProjectService projectService;

    @GetMapping("/")
    public String home(){return "<HTML><HEAD><H1>WELCOME TO CLIENT APPLICATION</H1></HEAD></HTML>";}
}
