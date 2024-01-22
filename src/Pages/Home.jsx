import React, { useState } from 'react'

export default function Home({id}) {

    const [a,setA] = useState()
    const [b,setB] = useState()
    const [c,setC] = useState(0)


    function changeA(t){
        setA(t.target.value)
        }
        
        function changeB(t){
            setB(t.target.value)
            }

            function sum(){
                setC(parseInt(a)+parseInt(b))

            }
  return (
    <div>
        <h4> My Calculator</h4>
        <h2>{id}</h2>

        <input value={a} onChange={changeA} className='bg-gray-500 rounded-md' type="number" placeholder='Enter a number' />
        +
        <input value={b} onChange={changeB} className='bg-gray-500 rounded-md' type="number" placeholder='Enter a number' />
        
        <p>{parseInt(a)+parseInt(b)}</p>
        <button onClick={sum}>Sum</button>



    </div>
  )
}
