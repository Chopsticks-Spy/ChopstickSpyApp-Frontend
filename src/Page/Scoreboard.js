import React from 'react'
import HomeBtn from '../Components/HomeBtn'
import PlayerScore from '../Components/PlayerScore'

const Scoreboard = () => {
  return (
    <div className='scoreboard-main'>
      <div className='scoreboard-list'>
        <PlayerScore ranking="1" name="aaaaaaa" score="5200" />
        <PlayerScore ranking="2" name="ajgjkajgkjkwg" score="4000" />
        <PlayerScore ranking="3" name="skdjiwjjjfjjf" score="3000" />
        <PlayerScore ranking="4" name="aaaaaww" score="2000" />
        <PlayerScore ranking="4" name="aaaaaww" score="2000" />
        <PlayerScore ranking="4" name="aaaaaww" score="2000" />
        <PlayerScore ranking="4" name="aaaaaww" score="2000" />
        <PlayerScore ranking="4" name="aaaaaww" score="2000" />
      </div>
      <HomeBtn/>
    </div>
  )
}

export default Scoreboard