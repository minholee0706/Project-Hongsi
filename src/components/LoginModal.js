import React,{useEffect, useState} from "react";
import Modal from "react-modal";
import DB_Login from "./dbLogin";
import './CSS/LoginModal.css';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width : '500px',
    height : '500px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Login_Modal =()=>{
   
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
    return (
    <div className="Login_Modal_div">
        <a onClick={openModal}>LOGIN</a>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <div className="Login_Modal_css">
            <h2>HONGSI</h2>
            
           
            <DB_Login />
            <div><button onClick={closeModal}>close</button></div>
            </div>
            
        </Modal>
    </div>

    )
}

export default Login_Modal;