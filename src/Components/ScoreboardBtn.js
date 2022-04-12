import React from 'react'
import { Link } from 'react-router-dom'

const ScoreboardBtn = () => {
  return (
    <div className ="score">
      <Link to="/scoreboard" className="scorebtn">SCOREBOARD</Link>
    </div>
  )
}

export default ScoreboardBtn