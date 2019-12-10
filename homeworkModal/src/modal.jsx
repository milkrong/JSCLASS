import React from 'react';
import './modal.css'

const Modal = (props) => {
  let modalClass = props.show? "modal open" : "modal"
  return (
    <div className={modalClass}>
      <div className="wrapper" style={{width : props.width}}>
        <div className="header">
          Title
          <i class="fas fa-times" onClick={props.handleClose}></i>
        </div>
        <div className="content">
          {props.content}
        </div>
        <div className="footer">
          <button style={{backgroundColor: 'grey'}} onClick={props.handleClose} >{props.cancelButtonText}</button>
          <button>{props.buttonText}</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;