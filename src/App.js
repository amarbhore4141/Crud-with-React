import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import RegisterEmployeeComponent from './components/RegisterEmployeeComponent';
import updateEmployeeComponent from './components/updateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
              
                  <div className="container">
                  <HeaderComponent />
                    <div className='container'>
                      <Routes>
                         <Route path='/' exact element= <ListEmployeeComponent/> />
                         <Route path='/Employee' element = <ListEmployeeComponent/> />
                         <Route path='/register' Component = {RegisterEmployeeComponent} />
                         <Route path='/employees/:id' Component= {updateEmployeeComponent}/ >
                      </Routes>
                      
                    </div>
                    
                  
                  <FooterComponent />   

                  </div>
      </Router> 
    </div>
  );
}

export default App;
