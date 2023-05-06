package com.example.ClientManagement.Dao;

import com.example.ClientManagement.Entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectDao extends JpaRepository<Project, Integer> {
}
