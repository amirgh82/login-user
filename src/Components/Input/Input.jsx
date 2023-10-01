import React from 'react'
import './Input.css'


export default function Input({ type, placeholder }) {
    return (
        <input type={type} placeholder={placeholder} />
    )
}
