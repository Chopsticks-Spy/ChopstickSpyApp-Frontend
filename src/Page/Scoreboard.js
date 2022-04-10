import React, { useEffect, useState } from 'react'
import HomeBtn from '../Components/HomeBtn'
import PlayerScore from '../Components/PlayerScore'
import { getScore } from '../service/Scoreboard'

const Scoreboard = () => {

  const [scoreboard,setScoreboard] = useState([])

  useEffect(()=>{
    getScore().then((response)=>{
      setScoreboard(response.data)
      console.log(scoreboard)
    })
  })

  return (
    <div className='scoreboard-main'>
      <PlayerScore ranking="-" name="Name" hp="HP" time="Time Used" /> 
      <div className='scoreboard-list'>
        {
          scoreboard.map((sb) =>{
            <PlayerScore ranking="1" name={sb.name} hp={sb.hp} time={(sb.time)} />
          })
        }
        
      </div>
      <HomeBtn className="home-btn"/>
    </div>
  )
}

export default Scoreboard