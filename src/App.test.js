import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('renders template text', () => {
  render(<App />)
  const templateTextElement = screen.getByText(/React Template for Ember & Moki Co./i)
  expect(templateTextElement).toBeInTheDocument()
})
