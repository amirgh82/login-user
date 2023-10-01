import React from 'react'
import './Button.css'

export default function Button({children}) {
    return (
        <button type="submit" className='btn-submit'>{children}</button>
    )
}
