import { render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App'

test('Should render the header', () => {
  render(
    <MemoryRouter>
    <App />
    </MemoryRouter>
  );
    // header image
    // profile name
})
