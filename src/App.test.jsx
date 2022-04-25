import { render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './components/layout/Header';

test('Should render the header', () => {
  render(
    <MemoryRouter>
    <Header />
    </MemoryRouter>
  );

})
