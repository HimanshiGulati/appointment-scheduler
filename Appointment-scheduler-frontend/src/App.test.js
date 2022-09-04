import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

jest.mock("./pages/appointment-dashboard", () => () => (
  <div data-testid="appointment-dasboard"></div>
));

test("Renders Appointment Dashboard component", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId(/appointment-dasboard/)).toBeInTheDocument();
});
