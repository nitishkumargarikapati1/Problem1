import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; 
import AddIcon from '@mui/icons-material/Add';
import { fade, makeStyles } from '@mui/styles';
import Tabular from "./Tablular";
import img1 from "../pics/graph1.jpg";
import img2 from "../pics/graph2.jpg";
import Account from './Account';
import Listing from "./Listing"
import video from "./video thumbnail.png";
const useStyles=makeStyles((theme)=>({
    Space:{
        wordSpacing:2,
        marginRight:2,
    },
}));
const Overview = () => {
    const classes=useStyles();
  return (
    <div>
        <div className="">
        <Toolbar>
      
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        Overview
      </Typography>
      <Button variant="contained" className={classes.Space}>ADD FUNDS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<AddIcon></AddIcon>}</Button>
    </Toolbar>
        </div>
        <div className="Container">
           <div className="container">
                <div className="box">
                    <div className="boxes"><img src={img1}>
                    </img></div>
                    <div className="boxes"><img src={img2}></img></div>
                </div>
                <div className="table">
                    <Tabular></Tabular>
                </div>
           </div>
           
           
        <div className="sidebox">
           
            <Account></Account>
            <h3>User</h3>
           <div> <Listing></Listing></div>
            <div>
                <img src={video} style={{width:350,height:300,textAlign:"center",margin:"auto",marginTop:"2%"}}></img>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Overview