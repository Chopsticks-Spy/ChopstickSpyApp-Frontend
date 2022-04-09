import React from 'react'
import { Link } from 'react-router-dom'

function Startbtn() {
  return (
    <div className ="start">
      <Link to="/Ingame" className="startbtn">START</Link>
    </div>
  )
}

export default Startbtn