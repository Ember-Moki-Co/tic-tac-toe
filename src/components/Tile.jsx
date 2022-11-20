import React, { useState } from 'react'
import '../stylesheets/Tile.scss'

const Tile = ({ tile, board, currentPlayer, setCurrentPlayer, setPlayer1, setPlayer2, winnerMessage }) => {
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
      onClick={winnerMessage.length > 1 ? undefined : () => handleTileChange()}
    >
      {tile}
    </div>
  )
}

export default Tile
