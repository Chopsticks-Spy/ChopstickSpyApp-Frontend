import React, { useEffect, useState } from 'react'
import Timer from '../Components/Timer'
import { getStatus, patchStatus, patchStatusAttr } from '../service/Status'

const Ingame = () => {
  
  const [status, setStatus] = useState(0)

  useEffect(() => {
    getStatus().then((resp) => {
      if (resp.isActive === false) {
        if (resp.isWin === 1) {
          setStatus(1)
        } else if (resp.isWin === -1) {
          setStatus(-1)
        }
      }
    })
  }, [])

  // console.log(data);

  return (
    <div>
      <div className="time-box">
        <Timer/>
        {status === 1 && <meta http-equiv = "refresh" content = "0; url = http://192.168.43.80:3000/win" />}
        {status === -1 && <meta http-equiv = "refresh" content = "0; url = http://192.168.43.80:3000/lose" />}
      </div>
    </div>
  )
}

export default Ingame