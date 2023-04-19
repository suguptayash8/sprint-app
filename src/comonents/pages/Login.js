import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {login, logout, updateSession } from '../../reducers/LoginReducer';
import { userMock } from "../../mocks/mock";
import '../../App.css';

const LoginPage = function(){

    let [state, updateState] = useState({username:'',
                                        password:''
                                    });
                                    
    const loggedIn = useSelector((state)=>state.loggedIn);
    const dispatch = useDispatch();
    let username, password;

    if(!loggedIn){
        return (<div className="Login-container">
        <form></form>
        <input type="text" placeholder="User name / Email" onChange={(evt)=>{
            username = evt.target.value;
        }} ></input>
        <input type="password" placeholder="Password" onChange={(evt)=>{
            password = evt.target.value;
        }}></input>
        <button onClick={()=>{
            if(username === userMock.users.admin.username && password === userMock.users.admin.password){
                dispatch(login());
            }else{
                dispatch(logout());
            }
            }}>Login</button>
    </div>)
    }else {
        return;
    }
    
}

export default LoginPage;