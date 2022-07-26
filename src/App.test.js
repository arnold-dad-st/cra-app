import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn Git Actions/i);
  expect(linkElement).toBeInTheDocument();
});

test('init version', () => {
  expect(0).toBe(0);
});
