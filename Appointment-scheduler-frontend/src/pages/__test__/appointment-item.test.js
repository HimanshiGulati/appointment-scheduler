import AppointmentItem from "../appointment-item";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const appointmentItem = {
  appointmentTime: "1:00pm-2:00pm",
  available: "true",
  id: "101",
};

describe("Test the Appointment Item Component", () => {
  test("render the card title text on the screen", async () => {
    render(<AppointmentItem appointmentItem={appointmentItem} />);
    const CardTitleId = screen.getByTestId("101");
    expect(CardTitleId).toBeInTheDocument();
  });

  test("render a button on the screen", async () => {
    render(<AppointmentItem appointmentItem={appointmentItem} />);
    const button = await screen.findAllByRole("button");
    expect(button).toHaveLength(1);
  });

  it("should render button component", () => {
    const { getByText } = render(
      <AppointmentItem appointmentItem={appointmentItem} />
    );
    expect(getByText("Book your slot")).toBeInTheDocument();
  });
});
