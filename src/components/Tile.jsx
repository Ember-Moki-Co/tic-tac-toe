import React, { useState } from 'react'
import '../stylesheets/Tile.scss'

const Tile = ({ tile, board, currentPlayer, setCurrentPlayer, setPlayerOneMoves, setPlayerTwoMoves, winnerMessage, turnOne, turnTwo }) => {
  const handleTileChange = () => {
    if (typeof board[tile] === 'number') {
      currentPlayer === turnOne ? setCurrentPlayer(turnTwo) : setCurrentPlayer(turnOne)
      board[tile] = currentPlayer
      if (currentPlayer === turnOne) {
        setPlayerOneMoves(playerOneMoves => [...playerOneMoves, tile])
      } else {
        setPlayerTwoMoves(playerTwoMoves => [...playerTwoMoves, tile])
      }
    }
  }

  return (
    <div
      className='tile'
      data-testid='game-tile'
      onClick={winnerMessage.length > 1 ? undefined : () => handleTileChange()}
    >
      {typeof tile === 'number' ? undefined : tile}
    </div>
  )
}

export default Tile
