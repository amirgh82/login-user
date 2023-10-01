import React, { useRef } from 'react'
import './Input.css'


export default function Input({ type, placeholder }) {

    return (
        <div className="form-control">
            <input type={type} className='form-input' required />
            <span>{placeholder}</span>
        </div>
    )
}
