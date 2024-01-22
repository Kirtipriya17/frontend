import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({name}) {
  return (
    <nav className='flex-row flex justify-between bg-orange-300 p-5'>

        <div className='flex-row flex items-center'>
         <img className='h-10 w-10 rounded-full' src="../src/assets/logo2.jpg" alt="" />
         <p className='ms-5'> School Website</p>
         <p>{name} </p>
        </div>

        <div className='flex-row flex items-center'>
            <Link to={"/"}>
            <p> Home</p>
            </Link>
            
            <Link to={"/about"}>
            <p className='ms-5'>About</p>
            </Link>

            <Link to={"/contactus"}>
        <p className='ms-5'> Contact Us</p>
            </Link>

            <Link to={"/Login"}>
            <p className='ms-5'> Login</p>
            </Link>

            <Link to={"/Register"}>
            <p className='ms-5'>Register</p>
            </Link>

           <Link to={"/form"}>
          <p className='ms-5'> Form</p>
          </Link> 

        
        </div>
    </nav>
  )
}
