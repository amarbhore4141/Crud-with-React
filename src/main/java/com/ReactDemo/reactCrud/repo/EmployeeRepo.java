package com.ReactDemo.reactCrud.repo;

import com.ReactDemo.reactCrud.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepo extends JpaRepository<Employee,Integer> {

}
