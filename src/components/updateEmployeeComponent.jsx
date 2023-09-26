import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import axios from 'axios';

function UpdateEmployeeComponent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    fname: '',
    lastName: '',
    email: '',
  });

  const { fname, lastName, email } = employee;
  
  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const loadEmployee = async () => {
      try {
        const res = await EmployeeService.getEmployeeById(id);
        const employeeData = res.data;
        setEmployee(employeeData);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    loadEmployee();
  }, [id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:9001/api/v1/employees/${id}`,employee);
    // await EmployeeService.updateEmployee(id, employee);
    navigate('/');
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h3 className="text-center">Update Employee</h3>
            <div className="card-body">
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label>First Name:</label>
                  <input
                    type="text"
                    placeholder="e.g. Amar"
                    name="fname"
                    className="form-control"
                    value={fname}
                    onChange={onInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name:</label>
                  <input
                    type="text"
                    placeholder="e.g. Bhore"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={onInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email-Id:</label>
                  <input
                    type="email"
                    placeholder="abc123@gmail.com"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={onInputChange}
                  />
                </div>
                <div>
                  <button className="btn btn-success" type="submit">Update</button>
                  <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateEmployeeComponent;
