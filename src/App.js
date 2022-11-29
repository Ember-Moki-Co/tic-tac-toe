import React, { useState } from 'react'
import './App.scss'
import Board from './components/Board'
import PlayerSelection from './components/PlayerSelection'

function App () {
  const [turnOne, setTurnOne] = useState(null)
  const [turnTwo, setTurnTwo] = useState(null)
  const [gameReady, setGameReady] = useState(false)

  return (
    <>
      {!gameReady
        ? <PlayerSelection
          turnOne={turnOne}
          setTurnOne={setTurnOne}
          turnTwo={turnTwo}
          setTurnTwo={setTurnTwo}
          gameReady={gameReady}
          setGameReady={setGameReady}
        />
        : <Board
          turnOne={turnOne}
          turnTwo={turnTwo}
          gameReady={gameReady}
        />
      }
    </>
  )
}

export default App
