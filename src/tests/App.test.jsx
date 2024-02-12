import { render, screen } from "@testing-library/react";
import App from "../App";

it("renders heading", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /enjoy!/i }).textContent).toMatch(
    "Enjoy!",
  );
});
