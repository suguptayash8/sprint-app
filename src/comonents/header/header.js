import React from "react";
import UserLogin from './navigation/Login';
import { useSelector } from 'react-redux';
import '../../App.css';
import Dashboard from "./navigation/dashboard";
import Logout from "./navigation/Logout";

const Header = () => {

    const loggedIn = useSelector((state) => state.loggedIn);

    if(loggedIn){
        return (<div className="App-my-header">
            <Dashboard></Dashboard>
            <div></div>
            <Logout></Logout>
        </div>);
    }else{
        return (<div className="App-my-header">
            <div></div>
            <UserLogin ></UserLogin>
        </div>);
    }
    
}
export default Header;