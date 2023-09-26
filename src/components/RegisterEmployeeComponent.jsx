import React, { Component } from 'react';
import { Link, NavLink,Navigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';



class RegisterEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lastName: '',
      email: '',
    //   redirectToRegister: false,
    registrationSuccessful: false,
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.registerEmployee = this.registerEmployee.bind(this);
  }

  changeFirstNameHandler(event) {
    this.setState({ fname: event.target.value });
  }

  changeLastNameHandler(event) {
    this.setState({ lastName: event.target.value });
  }

  changeEmailHandler(event) {
    this.setState({ email: event.target.value });
  }

  registerEmployee(e) {
    e.preventDefault();
    const employee = {
      fname: this.state.fname,
      lastName: this.state.lastName,
      email: this.state.email,
    };

    console.log('employee => ' + JSON.stringify(employee));

    EmployeeService.registerEmployee(employee)
      .then((res) => {
        
        this.setState({ registrationSuccessful: true });
      })
      .catch((error) => {
        console.error('Error registering employee:', error);
      });
  }

  render() {
    

    if (this.state.registrationSuccessful) {
        return <Navigate to="/" />;
      }
 

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Register new Employee!</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name:</label>
                    <input
                      placeholder="e.g. Amar"
                      name="firstName"
                      className="form-control"
                      value={this.state.fname}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name:</label>
                    <input
                      placeholder="e.g. Bhore"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email-Id:</label>
                    <input
                      placeholder="abc123@gmail.com"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <div>
                    <button
                      className="btn btn-success"
                      onClick={this.registerEmployee}
                    >
                      Register
                    </button>
                    <Link
                      to="/"
                      className="btn btn-danger"
                      style={{ marginLeft: '10px' }}
                    >
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterEmployeeComponent;
