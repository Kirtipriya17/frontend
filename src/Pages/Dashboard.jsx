import React from 'react'

export default function Dashboard() {
 function logout (){
    localStorage.removeItem("userToken")
    window.location.reload()
  }
  return (
    <div>

      
      
        <button onClick={logout}>LogOut</button>
      
    </div>
  )
}
