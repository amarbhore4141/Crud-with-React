package com.ReactDemo.reactCrud.control;

import com.ReactDemo.reactCrud.exception.ResourceNotfoundException;
import com.ReactDemo.reactCrud.model.Employee;
import com.ReactDemo.reactCrud.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class EmloyeeController {
    @Autowired
    private EmployeeRepo employeeRepo;

    @GetMapping("employees")
    public List<Employee> getAllEmployees() {
        return employeeRepo.findAll();
    }

    @PostMapping("register")
    public Employee registerEmployee(@RequestBody Employee employee) {
        System.out.println(employee);
        Employee employee1 = employeeRepo.save(employee);
        return employee1;
    }

    @GetMapping("employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable int id) {
        Employee employee = employeeRepo.findById(id).orElseThrow(() -> new ResourceNotfoundException("Id does not exists: " + id));
        return ResponseEntity.ok(employee);
    }

    @PutMapping("employees/{id}")
    public ResponseEntity<Employee> updateEmployeeById(@PathVariable int id, @RequestBody Employee employeeData) {
        Employee employee = employeeRepo.findById(id).orElseThrow(() -> new ResourceNotfoundException("Id does not exists: " + id));
        System.out.println(employee);
        return ResponseEntity.ok(employeeRepo.save(employee.builder().id(id).fname(employeeData.getFname()).lastName(employeeData.getLastName()).email(employeeData.getEmail()).build()));
    }
}
