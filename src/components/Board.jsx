import React, { useState } from 'react'
import Tile from './Tile'
import '../stylesheets/Board.scss'

const Board = ({ turnOne, turnTwo }) => {
  const [board] = useState([...Array(9).keys()])
  const [currentPlayer, setCurrentPlayer] = useState(turnOne)
  const [playerOneMoves, setPlayerOneMoves] = useState([])
  const [playerTwoMoves, setPlayerTwoMoves] = useState([])
  const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  let winnerMessage = ' '

  winCondition.map(conditions => {
    return conditions.map(condition => {
      console.log('a', condition)
      if (playerOneMoves === condition && playerOneMoves.length >= 3) {
        winnerMessage = 'bruh'
      }
      return undefined
    })
  })
  // winCondition.forEach((condition) => {
  //   if (JSON.stringify(condition) === 'number') {
  //     winnerMessage = 'Draw!'
  //   } else if ('bruh' === 'bruh') {
  //     // winnerMessage = `${turnOne} wins!`
  //     console.log(condition)
  //   } else if (playerTwoMoves.includes(condition)) {
  //     winnerMessage = `${turnTwo} wins!`
  //   } else {
  //     undefined
  //   }
  // })

  console.log(playerTwoMoves)
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
              setPlayerOneMoves={setPlayerOneMoves}
              setPlayerTwoMoves={setPlayerTwoMoves}
              winnerMessage={winnerMessage}
              turnOne={turnOne}
              turnTwo={turnTwo}
            />
          )
        })}
      </div>
    </>
  )
}

export default Board
