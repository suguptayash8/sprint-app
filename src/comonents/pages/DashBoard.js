import React from "react";
import { useSelector, useDispatch } from 'react-redux';

const DashboardData = ()=>{
    let loggedIn = useSelector((state)=>state.loggedIn);

    if(loggedIn){
        return (<div>Data</div>);
    }else{
        return;
    }
    
}

export default DashboardData;