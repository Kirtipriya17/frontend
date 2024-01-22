import React, { useState } from 'react'

export default function 
Register() {
    const [name, setName] = useState()
    const [PhoneNo, setPno] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()


function handleRegister (e){
    e.preventDefault();
     const body = {
        name,PhoneNo,email,password
     }
    fetch("http://localhost:3000/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
    }).then(response => {
        if(response.status === 201){
            return  response.json()
        }else{
            alert("Response was not successful")
            return response.json()
            // alert(response.body.message)
            // throw new Error(response)
        }
    }).then(json => alert(json.message))
    .catch(error => alert(error))


}

  return (
    <div className='flex justify-center self-center h-[100vh] items-center '>
<form onSubmit={handleRegister} action=""className='flex flex-col ' >
    <input type="text"
    className='bg-blue-200 rounded-md m-2'placeholder='Enter Your Name' value={name}
    onChange={(e)=>
    setName(e.target.value)} />
    <input type="number"
    className='bg-blue-200 rounded-md m-2'placeholder='Enter Your phone number' value={PhoneNo}
    onChange={(e)=>
    setPno(e.target.value)} />
    <input type="text"
    className='bg-blue-200 rounded-md m-2'placeholder='Enter Your email' value={email}
    onChange={(e)=>
    setemail(e.target.value)} />
    <input type="password"
    className='bg-blue-200 rounded-md m-2'placeholder='Enter Your Password' value={password}
    onChange={(e)=>
    setpassword(e.target.value)} />
    <button onClick={handleRegister}>Submit</button>
</form>
    </div>
  )
}
