import React from 'react'
import { Link } from 'react-router-dom';
import './Button.css'

export default function Button(props) {

    if (props.to) {
        return (
            <Link to={props.to} className='button'>
                {props.children}
            </Link>
        )
    } else if (props.href) {
        return (
            <a href={props.href} className='button'>
                {props.children}
            </a>
        );
    } else {
        return (
            <button
                className='button'
                type={props.type}
                onClick={props.onClick}
                disabled={props.disabled}
            >
                {props.children}
            </button>
        );
    }

}
