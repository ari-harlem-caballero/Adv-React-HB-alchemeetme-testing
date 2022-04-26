import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', async () => {
  render(
    <MemoryRouter>
      <Home user={user} />
    </MemoryRouter>
  )
  // name
  const profileName = await screen.findByText(/vonta/i)

  // motto
  const profileMotto = await screen.findByText(/res non verba/i)
  // interests
  // avatar
  // header img
  // list of likes

  expect(profileName.textContent).toEqual('Vonta')
  expect(profileMotto.textContent).toEqual('Res Non Verba')
})
