import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the home view", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /Robert Mercado/i })).toBeInTheDocument();
});
