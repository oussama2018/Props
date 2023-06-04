import React from 'react'
import Player from './Player'
import players from './players'
const PlayersList = () => {
  return (
    
players.map(player=>(
    <Player name={player.name} image={player.imageUrl}/>
    

))
    
  )
}

export default PlayersList