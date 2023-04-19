import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import {login, logout, updateSession } from '../../../reducers/LoginReducer';
import '../../../App.css';

const Logout = ()=>{

    const loggedIn = useSelector((state)=>state.loggedIn);
    const dispatch = useDispatch();

    return (<Link className='Header-content' onClick={()=>{
        dispatch(logout());
    }}>Logout</Link>);
}

export default Logout;