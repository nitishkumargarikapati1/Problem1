import React from 'react';
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import Badge from "@mui/icons-material/Badge";
import Stack from '@mui/material/Stack';
import { bgcolor, borderRadius } from '@mui/system';

const Account = () => {
  return (
    <div className='Account'>
         <div>
        
         
         <Stack direction="row" spacing={2}>
         &nbsp;&nbsp;<Avatar
        alt="Remy Sharp"
        src="profile-pic-06.jpg"
        sx={{ width: 100, height:100}}
      >
       
      </Avatar>
      <EditIcon sx={{bgcolor:"blue", borderRadius:"50%",color:"black",position:"relative",right:40,top:50,textAlign:"center"}}></EditIcon>
       
    </Stack>
    <p style={{}}>Nitishkumar Garikapati</p>
    <p style={{color:"#B0B7DE",textAlign:"center"}}>India</p>

         
         </div>
         &nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-linkedin-square" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;
         <i class="fa fa-instagram" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;
         <i class="fa fa-telegram" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;
         <i class="fa fa-facebook-official" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;
         <div>

         </div>




    </div>

  )
}

export default Account;