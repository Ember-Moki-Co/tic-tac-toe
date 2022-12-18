import React, { useState, useEffect } from 'react'
import Tile from './Tile'
import '../stylesheets/Board.scss'

const Board = ({ turnOne, turnTwo }) => {
  const [board, setBoard] = useState([...Array(9).keys()])
  const [currentPlayer, setCurrentPlayer] = useState(turnOne)
  const [gameOver, setGameOver] = useState(false)
  const [winnerMessage, setWinnerMessage] = useState(undefined)

  const checkGameOver = (board) => {
    // Define winning combinations
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    const wins = winningCombos.map((combo) =>
      combo.every((i) => typeof board[i] !== 'number' && board[i] === board[combo[0]])
    )
    if (wins.includes(true)) {
      setGameOver(true)
      setWinnerMessage(`${currentPlayer} wins!`)
      return
    }

    if (board.every((square) => typeof square !== 'number')) {
      setGameOver(true)
      setWinnerMessage('Draw!')
    }
  }

  const resetGame = () => {
    setBoard([...Array(9).keys()])
    setCurrentPlayer(turnOne)
    setGameOver(false)
  }

  return (
    <>
      <h1>{winnerMessage}</h1>
      <div id='board' data-testid='game-board'>
        {board.map((tile, index) => {
          return (
            <Tile
              key={index}
              tile={tile}
              board={board}
              currentPlayer={currentPlayer}
              setCurrentPlayer={setCurrentPlayer}
              turnOne={turnOne}
              turnTwo={turnTwo}
              gameOver={gameOver}
              setBoard={setBoard}
              checkGameOver={checkGameOver}
            />
          )
        })}
      </div>
    </>
  )
}

export default Board
