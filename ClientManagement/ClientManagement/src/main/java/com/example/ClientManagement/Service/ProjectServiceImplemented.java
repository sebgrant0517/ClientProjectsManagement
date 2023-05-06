package com.example.ClientManagement.Service;

import com.example.ClientManagement.Dao.ProjectDao;
import com.example.ClientManagement.Entity.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectServiceImplemented implements ProjectService{
    @Autowired
    private ProjectDao projectDao;
    @Override
    public List<Project> getProjects(String client) {
        List<Project> proj = projectDao.findAll();
        List<Project> projects = new ArrayList<>();
        for(Project p : proj){
            if(p.projects_client.equals(client)){
                projects.add(p);
            }
        }
        return projects;
    }

    @Override
    public Project getProject(int project_id) {
        Optional<Project> p = this.projectDao.findById(project_id);
        Project project = null;
        if(p.isPresent()){
            project = p.get();
        } else{
            throw new RuntimeException("Project not found for id :: " + project_id);
        }
        return project;
    }

    @Override
    public Project addProject(Project project) {
        return this.projectDao.save(project);
    }

    @Override
    public Project updateProject(Project project) {
        return this.projectDao.save(project);
    }

    @Override
    public String deleteProject(int project_id) {
        this.projectDao.deleteById(project_id);
        return "Project Deleted Successfully";
    }
}
