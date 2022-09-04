import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import App from "./App";
import AppointmentDashboard from "./pages/appointment-dashboard";

jest.mock("./pages/appointment-dashboard", () => () => (
  <div data-testid="appointment-dasboard"></div>
));

test("Renders Appointment Dashboard component", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId(/appointment-dasboard/)).toBeInTheDocument();
});
