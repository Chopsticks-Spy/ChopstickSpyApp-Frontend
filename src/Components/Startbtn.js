import React from 'react'
import { Link } from 'react-router-dom'
import { patchStatusAttr } from '../service/Status'



function Startbtn() {
  return (
    <div className ="start">
      <Link to="/wait" className="startbtn" onClick={patchStatusAttr("isActive",true)}>START</Link>
    </div>
  )
}

export default Startbtn