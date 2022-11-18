import React, { useState } from 'react'
import '../stylesheets/Tile.scss'

const Tile = ({ tile, board, player1, setPlayer1 }) => {
  const handleTileChange = () => {
    if (typeof board[tile] === 'number') {
      player1 === '❌' ? setPlayer1('⭕️') : setPlayer1('❌')
      board[tile] = player1
    }
  }

  return (
    <div
      className='tile'
      data-testid='game-tile'
      onClick={() => handleTileChange()}
    >
      {tile}
    </div>
  )
}

export default Tile
