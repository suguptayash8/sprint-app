import React, {Component} from 'react';
import '../../../App.css';

import {
    Link
  } from 'react-router-dom';

class UserLogin extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(<Link to="/login"  className='Header-content'>
        Login
 </Link>);
    }
}

export default UserLogin;