import React, { useRef } from 'react'
import './Input.css'


export default function Input({ type, placeholder, icon }) {

    return (
        <div className="form-control">
            <span>{icon}</span>
            <input type={type} className='form-input' required />
            <label>{placeholder}</label>
        </div>
    )
}
