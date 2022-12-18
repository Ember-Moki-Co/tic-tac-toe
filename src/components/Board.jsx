import React, { useState, useEffect } from 'react'
import Tile from './Tile'
import '../stylesheets/Board.scss'

const Board = ({ turnOne, turnTwo }) => {
  const [board] = useState([...Array(9).keys()])
  const [currentPlayer, setCurrentPlayer] = useState(turnOne)
  const [playerOneMoves, setPlayerOneMoves] = useState([])
  const [playerTwoMoves, setPlayerTwoMoves] = useState([])
  const [gameWon, setGameWon] = useState(false)
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

  // const draw = playerOneWin === false && playerTwoWin === false
  // console.log(board.every(tile => typeof tile !== 'number'))
  // console.log(playerOneWin)
  const draw = gameWon === false && playerOneMoves.length + playerTwoMoves.length === 9

  winCondition.map(conditions => {
    console.log(board.every(tile => typeof tile !== 'number') && conditions.some(tile => playerOneMoves.includes(tile)))
    console.log(conditions)
    // console.log(board.every(tile => typeof tile !== 'number') && conditions.some(tile => playerOneMoves.includes(tile)) === false && conditions.every(tile => playerTwoMoves.includes(tile)) === false)
    // if (bruh && board.every(tile => typeof tile !== 'number')) {
    //   winnerMessage = 'Draw!'
    // }
    // if (conditions.every(tile => playerOneMoves.includes(!tile)) && conditions.every(tile => playerTwoMoves.includes(!tile))) {

    if (board.every(tile => typeof tile !== 'number') && conditions.some(tile => playerOneMoves.includes(tile)) === false && conditions.some(tile => playerTwoMoves.includes(tile)) === false) {
      winnerMessage = 'Draw!'
    } else if ((conditions.every(tile => playerOneMoves.includes(tile)) && playerOneMoves.length >= 3) || (board.every(tile => typeof tile !== 'number') && conditions.every(tile => playerOneMoves.includes(tile)))) {
      () => setGameWon(true)
      winnerMessage = `${turnOne} wins!`
    } else if ((conditions.every(tile => playerTwoMoves.includes(tile)) && playerTwoMoves.length >= 3) || (board.every(tile => typeof tile !== 'number') && conditions.every(tile => playerTwoMoves.includes(tile)))) {
      () => setGameWon(true)
      winnerMessage = `${turnTwo} wins!`
    } else if (board.every(tile => typeof tile !== 'number')) {
      winnerMessage = 'Draw!'
    }
    return undefined
  })

  // else if (board.every(tile => typeof tile !== 'number') && playerOneMoves.length + playerTwoMoves.length === 9 && draw) {
  //   winnerMessage = 'Draw!'
  // }
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
