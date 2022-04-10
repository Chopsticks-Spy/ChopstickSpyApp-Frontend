import React from 'react'
import Timer from '../Components/Timer'
import { patchStatus, patchStatusAttr } from '../service/Status'

const Ingame = () => {
  
  patchStatusAttr("isActive",true)
  
  return (
    <div>
      <div className="time-box">
        <Timer/>
      </div>
    </div>
  )
}

export default Ingame