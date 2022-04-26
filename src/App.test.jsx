import { render, screen} from '@testing-library/react';
import App from './App'

test('Should render the header', async () => {
  render(<App />)
    // header image
  const image = screen.getByAltText('Alchemy Logo')
    // profile name
  const headerName = await screen.findByLabelText(/meet vonta!/i)

  expect(image).toBeInTheDocument()
  expect(headerName).toBeInTheDocument()
})
