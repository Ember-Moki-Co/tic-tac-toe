import React, { useState } from 'react'
import Tile from './Tile'
import '../stylesheets/Board.scss'

const Board = () => {
  const [board] = useState([...Array(9).keys()])
  const [currentPlayer, setCurrentPlayer] = useState('❌')
  const [player1, setPlayer1] = useState([])
  const [player2, setPlayer2] = useState([])
  const winCondition = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  let winnerMessage = ' '
  winCondition.forEach(condition => {
    JSON.stringify(condition) === JSON.stringify(player1)
      ? winnerMessage = 'Player One Wins!'
      : JSON.stringify(condition) === JSON.stringify(player2)
        ? winnerMessage = 'Player Two Wins!'
        : undefined
  })

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
              setPlayer1={setPlayer1}
              setPlayer2={setPlayer2}
              winnerMessage={winnerMessage}
            />
          )
        })}
      </div>
    </>
  )
}

export default Board
