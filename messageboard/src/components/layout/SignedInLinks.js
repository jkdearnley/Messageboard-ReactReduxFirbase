import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/create' className="btn blue darken-1">Create Discussion</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating green darken-2">JD</NavLink></li>
        </ul>
    )
}

export default SignedInLinks