import logo from './logo.svg';
import './App.css';
import Header from './comonents/header/header';
import DashboardData from './comonents/pages/DashBoard';
import LoginPage from './comonents/pages/Login';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
    </div>
    <Routes>
    <Route exact path='/dashboard' element={<DashboardData/>} ></Route>
    <Route exact path='/login' element={<LoginPage/>} ></Route>
    </Routes>
    </Router>
  );
}

export default App;
