package genspark.ClientProjectManagement.Service;

import genspark.ClientProjectManagement.Dao.ClientDao;
import genspark.ClientProjectManagement.Dao.ProjectDao;
import genspark.ClientProjectManagement.Entity.Client;
import genspark.ClientProjectManagement.Entity.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ClientServiceImplemented implements ClientService{
    @Autowired
    private ClientDao clientDao;
    @Autowired
    private ProjectDao projectDao;
    @Override
    public List<Client> getClients() {
        return this.clientDao.findAll();
    }

    @Override
    public Client getClient(int client_id) {
        Optional<Client> c = this.clientDao.findById(client_id);
        Client client = null;
        if(c.isPresent()){
            client = c.get();
        } else{
            throw new RuntimeException("Client not found for id :: " + client_id);
        }
        return client;
    }

    @Override
    public Client addClient(Client client) {
        return this.clientDao.save(client);
    }

    @Override
    public Client updateClient(Client client) {
        return this.clientDao.save(client);
    }

    @Override
    public String deleteClient(int client_id) {
        Optional<Client> c = this.clientDao.findById(client_id);
        String clientName = null;
        if(c.isPresent()){
            clientName = c.get().client_name;
        } else{
            throw new RuntimeException("Client not found for id :: " + client_id);
        }
        this.clientDao.deleteById(client_id);
        List<Project> proj = projectDao.findAll();
        for(Project p : proj){
            if(p.projects_client.equals(clientName)){
                this.projectDao.deleteById(p.projects_id);
            }
        }
        return "Client Deleted Successfully";
    }
}
