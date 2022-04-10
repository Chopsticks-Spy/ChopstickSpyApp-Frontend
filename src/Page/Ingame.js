import React, { useEffect, useState } from 'react'
import Timer from '../Components/Timer'
import { getStatus, patchStatus, patchStatusAttr } from '../service/Status'

const Ingame = () => {
  
  const [data, setData] = useState({})

  useEffect(() => {
    setData(getStatus())
  }, [])

  console.log(data);

  return (
    <div>
      <div className="time-box">
        <Timer/>
      </div>
    </div>
  )
}

export default Ingame