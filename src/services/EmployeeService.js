
import axios from "axios";
const EMPLOYEE_API_BASEURL="http://localhost:9001/api/v1/employees/";
const EMPLOYEE_API_BASEURL_REGISTER="http://localhost:9001/api/v1/register/";


class EmployeeService{

    getEmployee(){
         return axios.get(EMPLOYEE_API_BASEURL);
    }

    registerEmployee(employee){
        return axios.post(EMPLOYEE_API_BASEURL_REGISTER,employee);
    }

    deleteEmployee(employee){
        return axios.post(EMPLOYEE_API_BASEURL_REGISTER,employee);
    }

    updateEmployee(id,employee){
        return axios.post(EMPLOYEE_API_BASEURL+id,employee);
    }

    getEmployeeById(id){
        return axios.get(EMPLOYEE_API_BASEURL+id);
    }

}

export default new EmployeeService()