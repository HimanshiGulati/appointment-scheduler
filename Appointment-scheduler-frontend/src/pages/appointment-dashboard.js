import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row } from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppointmentItem from "./appointment-item";
import * as Actions from "../store/appointment/appointment.actions";
import AppointmentModal from "./appointment-modal";
import "./appointment-styling.css";
import Loading from "../components/loading.component";

const AppointmentDashboard = () => {
  const appointmentData = useSelector(
    (state) => state.appointmentSlots.slots.appointmentData
  );
  const loading = useSelector((state) => state.appointmentSlots.loading);
  const modalOpenState = useSelector(
    (state) => state.appointmentSlots.slots.open
  );
  const selectedAppointmentTime = useSelector(
    (state) => state.appointmentSlots.slots.selectedAppointmentTime
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.listAppointmentSlots());
  }, [dispatch]);

  const showEditModal = (appointmentItem) => {
    dispatch(Actions.toggleModal());
    dispatch(Actions.selectAppointment(appointmentItem));
  };

  const closeEditModal = () => {
    dispatch(Actions.toggleModal());
  };

  const updateUserDetails = (e) => {
    const isPhoneNumberValid = validatePhoneNumber(e);
    if (isPhoneNumberValid || e.target.id === "userName") {
      let newSelectedAppointment = {
        ...selectedAppointmentTime,
        [e.target.id]: e.target.value,
      };
      dispatch(Actions.updateForm(newSelectedAppointment));
    }
  };

  const validatePhoneNumber = (e) => {
    if (e.target.id === "userPhone") {
      return !isNaN(e.target.value);
    }
  };

  const saveUserDetails = () => {
    let updatedAppointment;
    if (
      selectedAppointmentTime.userName === "" &&
      selectedAppointmentTime.userPhone === ""
    ) {
      toast("Entervalue");
    }
    if (
      selectedAppointmentTime.userName !== "" ||
      selectedAppointmentTime.userPhone !== ""
    ) {
      updatedAppointment = {
        ...selectedAppointmentTime,
        available: false,
      };
    } else {
      updatedAppointment = {
        ...selectedAppointmentTime,
        available: true,
      };
    }

    let updatedAppointmentList = appointmentData.map((appointment) => {
      if (
        appointment.appointmentTime === selectedAppointmentTime.appointmentTime
      ) {
        return updatedAppointment;
      } else {
        return appointment;
      }
    });

    dispatch(
      Actions.updateAppointment(updatedAppointmentList, updatedAppointment)
    );
    dispatch(Actions.toggleModal());
  };

  return (
    <React.Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h5 className="p-15">Select Appointment Slot</h5>
          <Row className="p-15">
            {appointmentData.map((appointmentItem) => {
              return (
                <AppointmentItem
                  appointmentItem={appointmentItem}
                  key={appointmentItem.id}
                  showEditModal={showEditModal}
                />
              );
            })}
          </Row>
          <AppointmentModal
            open={modalOpenState}
            handleClose={closeEditModal}
            selectedAppointmentTime={selectedAppointmentTime}
            handleChange={updateUserDetails}
            handleSave={saveUserDetails}
          ></AppointmentModal>
          <ToastContainer />
        </div>
      )}
    </React.Fragment>
  );
};

export default AppointmentDashboard;
