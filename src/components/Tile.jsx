import React, { useState } from 'react'
import '../stylesheets/Tile.scss'

const Tile = ({
  tile,
  board,
  currentPlayer,
  setCurrentPlayer,
  turnOne,
  turnTwo,
  gameOver,
  setBoard,
  checkGameOver
}) => {
  const handleTileChange = (index) => {
    if (!gameOver) {
      const newBoard = [...board]
      if (typeof newBoard[index] === 'number') {
        newBoard[index] = currentPlayer
        setBoard(newBoard)
        currentPlayer === turnOne ? setCurrentPlayer(turnTwo) : setCurrentPlayer(turnOne)
        checkGameOver(newBoard)
      }
    }
  }

  return (
    <div
      className='tile'
      data-testid='game-tile'
      onClick={() => handleTileChange(tile)}
    >
      {typeof tile === 'number' ? undefined : tile}
    </div>
  )
}

export default Tile
