import React from 'react'
import "./Modal.css"
import { Link } from 'react-router-dom';
function Modal() {
  return (
    <div className='modal'>
        <input/>
        <input/>
        <Link to="/edit">
        <button>click</button>
        </Link>
    </div>
  )
}

export default Modal