import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home link', () => {
  const app = render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
  expect(app).toMatchSnapshot();
});
