import {
  Button,
  Container,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import "./appointment-styling.css";

const AppointmentModal = (props) => {
  const {
    open,
    handleClose,
    handleChange,
    selectedAppointmentTime,
    handleSave,
  } = props;
  let submitButtonText = selectedAppointmentTime.available ? "Book" : "Update";

  return (
    <Container>
      <Modal isOpen={open} toggle={handleClose}>
        <ModalHeader toggle={handleClose}>Contact Information</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="userName">Name</Label>
            <Input
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter your name"
              onChange={handleChange}
              value={selectedAppointmentTime.userName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="userPhone">Phone Number</Label>
            <Input
              type="tel"
              name="userPhone"
              id="userPhone"
              placeholder="999-999-9999"
              onChange={handleChange}
              value={selectedAppointmentTime.userPhone}
              maxLength={10}
            />
          </FormGroup>
          <Button
            type="submit"
            color="primary"
            className="mx-1"
            onClick={handleSave}
            disabled={
              !selectedAppointmentTime.userPhone ||
              !selectedAppointmentTime.userName
            }
          >
            {submitButtonText}
          </Button>
          <Button color="secondary" className="mx-1" onClick={handleClose}>
            Cancel
          </Button>
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default AppointmentModal;
