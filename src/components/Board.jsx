import React from 'react'
import Tile from './Tile'
import '../stylesheets/Board.scss'

const Board = () => {
  const board = [null, null, null, null, null, null, null, null, null]
  return (
    <div id="board">
      {
        board.map((tile, index) => {
          return <Tile key={index} />
        })
      }
    </div>
  )
}

export default Board
