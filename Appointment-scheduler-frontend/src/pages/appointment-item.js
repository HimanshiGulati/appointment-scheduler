import React from "react";
import { Button, Card, Col, CardTitle } from "reactstrap";
import "./appointment-styling.css";

const AppointmentItem = (props) => {
  const { appointmentTime, available, id } = props.appointmentItem;
  let appointmentStatus = available ? "primary" : "danger";
  let buttonText = available
    ? "Book your slot"
    : "Time slot is no longer available";

  const wrapShowEditModal = () => {
    props.showEditModal(props.appointmentItem);
  };

  return (
    <React.Fragment>
      <Col sm="6" key={id} className="pb-20">
        <Card body key={id}>
          <CardTitle tag="h5">{appointmentTime}</CardTitle>
          <Button
            color={appointmentStatus}
            onClick={wrapShowEditModal}
            data-appointment-id={id}
          >
            {buttonText}
          </Button>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default AppointmentItem;
