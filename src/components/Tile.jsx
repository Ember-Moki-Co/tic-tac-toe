import React, { useState } from 'react'
import '../stylesheets/Tile.scss'

const Tile = ({ tile, board, currentPlayer, setCurrentPlayer, player1, player2, setPlayer1, setPlayer2 }) => {
  const handleTileChange = () => {
    if (typeof board[tile] === 'number') {
      currentPlayer === '❌' ? setCurrentPlayer('⭕️') : setCurrentPlayer('❌')
      board[tile] = currentPlayer
      if (currentPlayer === '❌') {
        setPlayer1(player1 => [...player1, tile])
      } else {
        setPlayer2(player2 => [...player2, tile])
      }
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
