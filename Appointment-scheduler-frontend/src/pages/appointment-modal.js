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
import {
  APPOINTMENT_MODAL_HEADING,
  BUTTON_BOOK,
  BUTTON_CANCEL,
  BUTTON_UPDATE,
  LABEL_NAME,
  LABEL_PHONE_NUMBER,
  PLACEHOLDER_NAME,
  PLACEHOLDER_PHONE_NUMBER,
} from "../utils/constants.utils";
import "./appointment-styling.css";

const AppointmentModal = (props) => {
  const {
    open,
    handleClose,
    handleChange,
    selectedAppointmentTime,
    handleSave,
  } = props;
  let submitButtonText = selectedAppointmentTime.available
    ? BUTTON_BOOK
    : BUTTON_UPDATE;

  return (
    <Container>
      <Modal isOpen={open} toggle={handleClose}>
        <ModalHeader toggle={handleClose}>
          {APPOINTMENT_MODAL_HEADING}
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="userName">{LABEL_NAME}</Label>
            <Input
              type="text"
              name="userName"
              id="userName"
              placeholder={PLACEHOLDER_NAME}
              onChange={handleChange}
              value={selectedAppointmentTime.userName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="userPhone">{LABEL_PHONE_NUMBER}</Label>
            <Input
              type="tel"
              name="userPhone"
              id="userPhone"
              placeholder={PLACEHOLDER_PHONE_NUMBER}
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
            {BUTTON_CANCEL}
          </Button>
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default AppointmentModal;
