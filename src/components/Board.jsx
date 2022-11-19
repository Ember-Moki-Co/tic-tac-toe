import React, { useState, useEffect } from 'react'
import Tile from './Tile'
import '../stylesheets/Board.scss'

const Board = () => {
  const [board, setBoard] = useState([...Array(9).keys()])
  const [currentPlayer, setCurrentPlayer] = useState('❌')
  const [player1, setPlayer1] = useState([])
  const [player2, setPlayer2] = useState([])
  const winCondition = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

  winCondition.map(condition => {
    return JSON.stringify(condition) === JSON.stringify(player1)
      ? console.log('player one wins')
      : JSON.stringify(condition) === JSON.stringify(player2)
        ? console.log('player 2 wins')
        : undefined
  })
  // console.log(JSON.stringify(player1) === JSON.stringify(winCondition[0]))

  return (
    <div id='board' data-testid='game-board'>
      {board.map((tile, index) => {
        return (
          <Tile
            key={index}
            tile={tile}
            board={board}
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
            player1={player1}
            player2={player2}
            setPlayer1={setPlayer1}
            setPlayer2={setPlayer2}
          />
        )
      })}
    </div>
  )
}

export default Board
