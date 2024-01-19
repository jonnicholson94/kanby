
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

import Loader from "@/components/ui/loader";

test('renders Loader component', () => {
  render(<Loader />);
  const loaderImage = screen.getByAltText('The spinner to indicate an action');
  expect(loaderImage).toBeInTheDocument();
});

test('has the animate styling to rotate the icon', () => {
    render(<Loader />);
    const loaderImage = screen.getByAltText('The spinner to indicate an action');
    expect(loaderImage).toHaveClass('animate-spin');
});