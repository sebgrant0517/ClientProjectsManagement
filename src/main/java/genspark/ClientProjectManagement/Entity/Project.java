package genspark.ClientProjectManagement.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "project_table")
public class Project {
    @Id
    @Column(name = "projects_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int projects_id;
    @Column(name = "projects_name")
    public String projects_name;
    @Column(name = "projects_description")
    public String projects_description;
    @Column(name = "projects_client")
    public String projects_client;

    public Project(String name, String desc, String client){
        projects_name = name;
        projects_description = desc;
        projects_client = client;
    }
    public int getProjects_id(){
        return projects_id;
    }

    public String getProjects_client() {
        return projects_client;
    }

    public String getProjects_description() {
        return projects_description;
    }

    public String getProjects_name() {
        return projects_name;
    }
    public void setProjects_description(String desc){
        projects_description = desc;
    }
}
