import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import App from "./App";

test("Renders Select Appointment Slot heading", () => {
  const { getByText } = render(<App />);
  expect(getByText("Select Appointment Slot")).toBeInTheDocument();
});
