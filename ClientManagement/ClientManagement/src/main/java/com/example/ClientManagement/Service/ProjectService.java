package com.example.ClientManagement.Service;

import com.example.ClientManagement.Entity.Project;

import java.util.List;

public interface ProjectService {
    List<Project> getProjects(String client);
    Project getProject(int project_id);
    Project addProject(Project project);
    Project updateProject(Project project);
    String deleteProject(int project_id);
}
