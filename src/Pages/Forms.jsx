import React, { useState } from 'react'

export default function Forms() {

    const [name , setName] = useState()
    const [pNo, setPno] = useState()
    const [email , setEmail] = useState()
    const [message , setMessage] = useState()
    const [interest, setInterest] = useState()

function handleForm(e){
    e.preventDefault();
    const body = {
        name, pNo, email, message, interest
    }
    fetch("http://localhost:3000/add-form",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
    }).then(response => {
        if(response.status === 201){
            alert("Response  successful")
            return  response.json()
        }else{
            alert("Response was not successful")
            return response.json()
            // alert(response.body.message)
            // throw new Error(response)
        }
    }).then(json => alert(json.message.msg))
    .catch(error => alert(error))

}

    return (
        <form onSubmit={handleForm} action="" className='grid justify-center 
        p-10 m-10 border-2 bg-red-300'>
            <div className='flex flex-col p-2 '>
                <label htmlFor="" className='mb-1'>Name</label>
                <input value={name} onChange={(e)=>
                setName(e.target.value)} className=' bg-blue-200 placeholder:text-gray-500
                placeholder:rounded ' type="text"placeholder='Name' />
            </div>
            <div className='flex flex-col p-2 '>
                <label htmlFor="" className='mb-1'>Phone Number</label>
                <input value={pNo} onChange={(e)=>
                setPno(e.target.value)} className=' bg-blue-200 placeholder:text-gray-500
                placeholder:rounded' type="phone number" placeholder='98XXXXXX75' />
            </div>
            <div className='flex flex-col p-2 '>
                <label htmlFor="" className='mb-1'>Email</label>
                <input value={email} onChange={(e)=>
                setEmail(e.target.value)} className=' bg-blue-200 placeholder:text-gray-500
                placeholder:rounded' type="email" placeholder='xyz@gmail.com' />
            </div>
            <div className='flex flex-col p-2 '>
                <label htmlFor="" className='mb-1'>Interest</label>
                <input value={interest} onChange={(e)=>
                setInterest(e.target.value)} className=' bg-blue-200 placeholder:text-gray-500
                placeholder:rounded' type="text" placeholder='Your Interest'/>
            </div>
            <div className='flex flex-col p-2'>
                <label htmlFor="" className='mb-1'>Message</label>
                <input value={message} onChange={(e)=>
                setMessage(e.target.value)} className=' bg-blue-200 placeholder:text-gray-500
                placeholder:rounded mb-5' type="text" placeholder='Leave a comment...' />
            </div>
            <button onClick={handleForm} type='submit' className='rounded-lg   hover:bg-blue-500'>Submit</button>
        </form>
    )
}
