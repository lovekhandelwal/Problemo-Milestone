import React from 'react';
// import { Avatar } from '@mui/icons-material';
import Avatar from "@mui/material/Avatar";
import './css/QuoraBox.css';

function QuoraBox() {
  return (
    <div className='quoraBox'>
       <div className='quoraBox__info'>
            <Avatar/>
       </div>
       <div className="quoraBox__quora"><h5>What is Your or Link?</h5></div>
    </div>
  );
}

export default QuoraBox