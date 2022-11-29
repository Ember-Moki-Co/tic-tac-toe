import React from 'react'

const PlayerSelection = ({ turnOne, turnTwo, setTurnOne, setTurnTwo, setGameReady }) => {
  const players = ['❌', '⭕️', '🐔', '🐀']

  const pickPlayers = (player) => {
    if (turnOne === player && turnOne !== null) {
      setTurnTwo(turnTwo)
    } else if (turnOne === null) {
      setTurnOne(player)
    } else if (turnTwo === null) {
      setTurnTwo(player)
    }
  }

  const resetPlayers = () => {
    setTurnOne(null)
    setTurnTwo(null)
  }

  return (
    <>
      <h1>Select a player:</h1>
      {players.map((player, index) => {
        return (
          <button key={index} onClick={() => pickPlayers(player)}>
            {player}
          </button>
        )
      })}
      <h2>Player 1: {turnOne}</h2>
      <h2>Player 2: {turnTwo}</h2>
      <button onClick={() => turnOne && turnTwo != null ? setGameReady(true) : undefined}>Enter Game</button>
      <button onClick={() => resetPlayers()}>Reset Players</button>
    </>
  )
}

export default PlayerSelection
