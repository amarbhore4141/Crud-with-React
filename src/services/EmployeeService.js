
import axios from "axios";
const EMPLOYEE_API_BASEURL="http://localhost:9001/api/v1/employees/";

class EmployeeService{

    getEmployee(){
         return axios.get(EMPLOYEE_API_BASEURL);
    }


}

export default new EmployeeService()