import React, {Component} from "react";
import '../../../App.css';
import {
    Link
  } from 'react-router-dom';

class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (<Link to="/dashboard"  className='Header-content'>
        Dashboard
        </Link>);
    }
}

export default Dashboard;