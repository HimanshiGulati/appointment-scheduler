import AppointmentItem from "../appointment-item";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const initialProps = {
  appointmentTime: "1:00pm-2:00pm",
  available: "true",
  id: "101",
};

describe("Test the Appointment Item Component", () => {
  test("render the card title text on the screen", async () => {
    render(<AppointmentItem />, { initialProps });
    const CardTitle = screen.queryAllByText("101");
    expect(CardTitle).toBeInTheDocument();
  });

  test("render a button on the screen", async () => {
    render(<AppointmentItem />, { initialProps });
    const button = await screen.findAllByRole("button");
    expect(button).toHaveLength(1);
  });
});
