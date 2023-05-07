package com.example.ClientManagement.Service;

import com.example.ClientManagement.Entity.Client;

import java.util.List;

public interface ClientService {
    List<Client> getClients();
    Client getClient(int client_id);
    Client addClient(Client client);
    Client updateClient(Client client);
    String deleteClient(int client_id);
}
