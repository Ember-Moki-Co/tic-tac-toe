import React, { useState, useEffect } from 'react'
import Tile from './Tile'
import '../stylesheets/Board.scss'

const Board = () => {
  const [board, setBoard] = useState([...Array(9).keys()])
  const [player1, setPlayer1] = useState('❌')

  return (
    <div id='board' data-testid='game-board'>
      {board.map((tile, index) => {
        return (
          <Tile key={index} tile={tile} board={board} player1={player1} setPlayer1={setPlayer1} />
        )
      })}
    </div>
  )
}

export default Board
