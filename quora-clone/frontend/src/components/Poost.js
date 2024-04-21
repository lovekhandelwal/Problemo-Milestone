
import React, { useState } from 'react';
import "./css/Poost.css";
import Avatar from '@mui/material/Avatar';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Close as CloseIcon } from '@mui/icons-material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

import  { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutline, MoreHorizOutlined, RepeatOneOnOutlined, ShareOutlined } from "@mui/icons-material"

const Poost = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const Close = (<CloseIcon />);

  return (
    <div className="post">
    <div className="post__info">
        <Avatar />
        <h4>User Name</h4>
        <small>Timestamp</small>
    </div>
    <div className="post__body">
        <div className="post__question">
        <p>
            This is test Questions
        </p>
        <button onClick={() => setIsModalOpen(true)} className="post__btnAnswer">Answer</button>
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
            <div className='modal__question'>
                <h1>This Is test Question</h1>
                <p>Asked by {" "} <span className='name'>Username</span> on {" "}
                <span className='name'>Timestamp</span></p>
            </div>
            <div className='modal__answer'>
                <ReactQuill  placeholder='Enter your Answer'/>
            </div>
            <div className='modal__button'>
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button  type="submit" className="add">
                Add Question
              </button>
            </div>
        </Modal>
    </div>
    </div>
    <div className="post__footer">
        <div className="post__footerActions">
            <ArrowUpwardOutlined />
            <ArrowDownwardOutlined />  
        </div>
        <RepeatOneOnOutlined />
        <ChatBubbleOutline />
        <div className="post__footerLeft">
            <ShareOutlined />
            <MoreHorizOutlined />
        </div>
    </div>
    <p style={{
        color:"rgba(0,0,0,0.5)",
        fontSize:"12px",
        fontWeight:"bold",
        margin:"10px 0",
    }}>1 Answer</p>
    <div style={{
        margin: "5px 0px 0px 0px",
        padding: "5px 0px 0px 20px",
        border: "1px solid lightgray",
    }} className="post__answer">
    <div style={{
        display:"flex",
        flexDirection:"column",
        width:"100%",
        padding:"10px 5px",
        borderTop: "1px solid lightgray",
    }} className="post__answer-container">
        <div style={{
            display:"flex",
            alignItems: "center",
            marginBottom:"10px",
            fontSize:"12px",
            fontWeight:600,
            color:"#888",

        }} className="post__answered">
            <Avatar />
            <div style={{
                margin:"0px 10px",
            }} className='post-info'>
                <p>
                    Username
                </p>
                <span>Timestamp</span>
            </div>
        </div>
        <div className='post-answer'>This is test answer</div>
    </div>
    </div>
</div>
  )
}

export default Poost

