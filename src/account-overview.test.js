import { render, screen } from '@testing-library/react';
import AccountOverview from './account-overview';

test('renders Account Overview react link', () => {
  render(<AccountOverview />);
  const element = screen.getByText(/Account Overview/i);
  expect(element).toBeInTheDocument();
});

test("renders Email address", () => {
  render(<AccountOverview/>);
  const element = screen.getByText("support@feefo.com");
  expect(element).toBeInTheDocument();
}) 

test("renders Telephone address", () => {
  render(<AccountOverview/>);
  const element = screen.getByText("020 3362 4208");
  expect(element).toBeInTheDocument();
}) 
