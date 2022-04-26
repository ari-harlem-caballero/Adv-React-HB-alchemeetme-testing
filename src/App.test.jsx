import { render, screen} from '@testing-library/react';
import App from './App'

test('Should render the header', () => {
  render(<App />)
    // header image
  const image = screen.getAllByAltText('alchemy logo')
    // profile name

  expect(image).toBeInTheDocument()
})
