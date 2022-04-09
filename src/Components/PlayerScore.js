import React from 'react'

const PlayerScore = (props) => {

    var ranking_color = "white"
    switch(props.ranking){
        case "1": ranking_color = "#ffbb00";break
        case "2": ranking_color = "#9c9c9c";break
        case "3": ranking_color = "#ad4731";break
    }

  return (
    <div className='score-card'>
        <p className='score-card-rank' style={{
            "color": ranking_color,
            "textShadow": Number(props.ranking) <= 3 ? `0px 0px 20px ${ranking_color}` : "0px 0px 0px white"
        }}>{props.ranking}</p>
        <p className='score-card-name'>{props.name}</p>
        <p className='score-card-score'>{props.score}</p>
    </div>
  )
}

export default PlayerScore