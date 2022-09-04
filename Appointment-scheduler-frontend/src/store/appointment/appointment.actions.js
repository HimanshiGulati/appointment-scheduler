import axios from "axios";
import { APPOINTMENT_ACTION_TYPES } from "./appointment.types";
import { toast } from "react-toastify";
import { API_URL } from "../../utils/constants.utils";

export const listAppointmentSlots = () => async (dispatch) => {
  dispatch({
    type: APPOINTMENT_ACTION_TYPES.APPOINTMENT_LIST_REQUEST,
  });
  try {
    const { data } = await axios.get(`${API_URL}/appointments`);
    dispatch({
      type: APPOINTMENT_ACTION_TYPES.APPOINTMENT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: APPOINTMENT_ACTION_TYPES.APPOINTMENT_LIST_FAIL,
      payload: error.message,
    });
  }
};

export const selectAppointment = (appointmentItem) => ({
  type: APPOINTMENT_ACTION_TYPES.SELECT_APPOINTMENT,
  payload: {
    appointmentTime: appointmentItem.appointmentTime,
    userName: appointmentItem.userName,
    userPhone: appointmentItem.userPhone,
    available: appointmentItem.available,
    id: appointmentItem.id,
  },
});

export const updateAppointment =
  (updatedAppointmentList, updatedAppointment) => async (dispatch) => {
    axios.post(`${API_URL}/bookappointment`, updatedAppointment).then((res) => {
      console.log(res.data);
      toast(res.data.message);
    });
    dispatch({
      type: APPOINTMENT_ACTION_TYPES.UPDATE_APPOINTMENT,
      payload: {
        appointmentData: updatedAppointmentList,
      },
    });
  };

export const updateForm = (appointmentItem) => ({
  type: APPOINTMENT_ACTION_TYPES.UPDATE_MODAL_FORM,
  payload: {
    appointmentTime: appointmentItem.appointmentTime,
    userName: appointmentItem.userName,
    userPhone: appointmentItem.userPhone,
    available: appointmentItem.available,
    id: appointmentItem.id,
  },
});

export const toggleModal = () => ({
  type: APPOINTMENT_ACTION_TYPES.TOGGLE_MODAL,
});
