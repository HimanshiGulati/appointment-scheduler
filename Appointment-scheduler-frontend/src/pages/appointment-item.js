import React from "react";
import { Button, Card, Col, CardTitle } from "reactstrap";
import { BUTTON_BOOK_SLOT, BUTTON_NO_SLOT } from "../utils/constants.utils";
import "./appointment-styling.css";

const AppointmentItem = (props) => {
  const { appointmentTime, available, id } = props.appointmentItem;
  let appointmentStatus = available ? "primary" : "danger";
  let buttonText = available ? BUTTON_BOOK_SLOT : BUTTON_NO_SLOT;

  const wrapShowEditModal = () => {
    props.showEditModal(props.appointmentItem);
  };

  return (
    <React.Fragment>
      <Col sm="6" key={id} className="pb-20">
        <Card body key={id}>
          <CardTitle tag="h5" data-testid={id}>
            {appointmentTime}
          </CardTitle>
          <Button color={appointmentStatus} onClick={wrapShowEditModal}>
            {buttonText}
          </Button>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default AppointmentItem;
