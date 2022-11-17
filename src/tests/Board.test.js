import Board from "../components/Board.jsx"
import { render, screen } from "@testing-library/react"

describe('Board', () => {
  beforeEach(() => {
    render(
      <Board />
    ) 
  })
  
  it('should render the board correctly', () => {
    const gameBoard = screen.getByTestId("game-board")
    expect(gameBoard).toBeInTheDocument
  })
  
  it('should render all 9 tiles of the board correctly', () => {
    const gameTile = screen.getAllByTestId("game-tile")
    expect(gameTile).toHaveLength(9)
  })
})