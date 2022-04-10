import React, { useEffect, useState } from 'react'
import { patchStatusAttr } from '../service/Status';

const CountDownPage = () => {
  
  patchStatusAttr("isActive",true);

  const [count, setCount] = useState(3);
  useEffect(() => {
    const timer = 
      count > 0 &&
      setInterval(() => setCount(count - 1), 1000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className='countdown-main' style={{"color":"white"}}>
      <h1 className='begin-text'>Game Begin in</h1>
      <h1 className='count-num'>{count}</h1>
      {count === 0 && <meta http-equiv = "refresh" content = "0; url = http://192.168.43.80:3000/Ingame" />}
    </div>
  )
}

export default CountDownPage