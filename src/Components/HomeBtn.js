import React from 'react'
import { Link } from 'react-router-dom'

const HomeBtn = () => {
  return (
    <div>
      <Link to="/" className="homebtn">BACK TO HOME</Link>
    </div>
  )
}

export default HomeBtn