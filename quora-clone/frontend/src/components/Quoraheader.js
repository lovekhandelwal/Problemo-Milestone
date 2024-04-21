import React, { useState } from "react"
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import {
    AssignmentTurnedInOutlined,
    NotificationsOutlined,
    Search,
    ExpandMore, 
    
} from "@mui/icons-material";
import { Close as CloseIcon } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import "./css/Qheader.css";
import axios from "axios";
import Input from '@mui/material/Input';


function Quoraheader() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("")
  const [question, setQuestion] = useState("")
  const handleSubmit = async () => {
    try {
      if (question !== "") {
        const config = {
          headers: {
            "Content-Type": "application/json"
          }
        };
        const body = {
          questionName: question,
          questionUrl: inputUrl
        };
        const res = await axios.post('/api/questions', body, config);
        console.log(res.data);
      }
    } catch (err) {
      console.error(err);
    }
  };
  
  const Close = (<CloseIcon />);

  return (
    <>
    <style>
      {
        `.avatar-button-container {
          display: flex;
          align-items: center;
      }
      .avatar-button-container .avatar {
          margin-right: 10px; /* Adjust the margin as needed */
      }
      .avatar-button-container button {
          /* Add styles as needed */
      }
      `
      }
    </style>
  <div className="qHeader">
    <div className="qHeader-content">
        <div className="qHeader__logo">
            <img src= {require("./images/logo_img.png")} alt='logo' />
            </div>
            <div className='qHeader__icons'>
                <div className='qHeader__icon'><HomeIcon /></div>
                <div className='qHeader__icon'><FeaturedPlayListOutlinedIcon /></div>
                <div className='qHeader__icon'><AssignmentTurnedInOutlined /></div>
                <div className='qHeader__icon'><PeopleAltOutlinedIcon /></div>
                <div className='qHeader__icon'><NotificationsOutlined /></div>
            </div>
            <div className='qHeader__input'>
              <Search />
              <input type= "text" placeholder ="Search Questions" />
            </div>
            <div className="qHeader__rem" style={{display:"flex", flexDirection:"row"}}>
              <Avatar />
            {/* </div>  */}
            <Button onClick={() => setIsModalOpen(true)}>Add Questions</Button>
            <Modal
             open = {isModalOpen}
             closeIcon ={Close} onClose = {() => setIsModalOpen(false)}
             closeOnEsc
             center
             closeOnOverlayClick={false}
             styles={{
              overlay:{
                height:"auto"
              },
             }}
            >
              <div className="modal__title">
                <h5>Add Question</h5>
                <h5>Share Link</h5>
              </div>
              <div className='modal__info'>
                <Avatar className='avatar'/>
                <div className="modal__scop">                 
                  <p style={{display: 'flex', flexDirection: 'row'}} >  <PeopleAltOutlinedIcon /> Public <ExpandMore /></p>
                  {/* <ExpandMore /> */}
              </div>
            </div>  
            <div className="modal__Field">
              <Input 
              value = {question}
              onChange={(e) => setQuestion(e.target.value)}
              type="text"
              placeholder="Start your question with 'What', 'How', 'Why', etc. "
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <input
                type="text"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                style={{
                  margin: "5px 0",
                  border: "1px solid lightgray",
                  padding: "10px",
                  outline: "2px solid #000",
                }}
                placeholder="Optional: inclue a link that gives context"
              />
              {
                inputUrl !== "" && <img style={{
                  height:"40vh",
                  objectFit:"contain",
                }} src={ inputUrl} alt ='displayimage' />
              }
              {/* <img src={ inputUrl} alt ='displayimage' /> */}
              </div>
              </div>
            
            <div className="modal__buttons">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button onClick={handleSubmit} type="submit" className="add">
                Add Question
              </button>
            </div>
          </Modal>
         </div>
     </div>
   </div>
   </>
  );
}

export default Quoraheader