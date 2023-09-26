import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';


class ListEmployeeComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
                        employees:[]
                    }
                    
        
    }



    componentDidMount(){
        EmployeeService.getEmployee().then((res)=>{
            this.setState({employees : res.data})
        });
    }
    
  
    
    render() 
    {
        return (
            <div>
                <h2 className='text-center'> Employee List</h2>
                <div className='row'>
                <Link to='/register' className='btn btn-primary'> Add Employee </Link>
                 </div>

                <div className='row'>
                    <table className="table table-striped table-bordered">
                        <thead>
                                <tr>
                                    <th>Id</th>
                                    <th> Employee First Name</th>
                                    <th> Employee Last Name</th>
                                    <th> Employee Email Id</th>
                                    <th> Actions</th>
                                </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                employee =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.fname}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                    <button to={`/employees/${employee.id}`} className='btn btn-success'>View</button>                                                                   
                                    <Link to={`/employees/${employee.id}`} className='btn btn-info'>Edit</Link>
                                        <button className="btn btn-danger">Delete</button>
                                     </td> 
                                </tr>)
                            }   

                        </tbody>

                    </table>

                </div>
                
            </div>
            
        );
    }
}


export default ListEmployeeComponent;