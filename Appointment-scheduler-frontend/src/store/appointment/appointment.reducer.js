import { APPOINTMENT_ACTION_TYPES } from "./appointment.types";

export const appointmentSlotsReducer = (
  state = { loading: true, slots: [] },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case APPOINTMENT_ACTION_TYPES.TOGGLE_MODAL:
      let updatedModalState = {
        ...state,
        slots: {
          ...state.slots,
          open: !state.slots.open,
        },
      };
      return updatedModalState;
    case APPOINTMENT_ACTION_TYPES.SELECT_APPOINTMENT:
      return {
        ...state,
        slots: {
          ...state.slots,
          selectedAppointmentTime: payload,
        },
      };
    case APPOINTMENT_ACTION_TYPES.APPOINTMENT_LIST_REQUEST:
      return { ...state, loading: true };
    case APPOINTMENT_ACTION_TYPES.APPOINTMENT_LIST_SUCCESS:
      return { loading: false, slots: payload };
    case APPOINTMENT_ACTION_TYPES.APPOINTMENT_LIST_FAIL:
      return { loading: false, error: payload };
    case APPOINTMENT_ACTION_TYPES.UPDATE_MODAL_FORM:
      let newSelectedSlotState = {
        ...state,
        slots: {
          ...state.slots,
          selectedAppointmentTime: payload,
        },
      };
      return newSelectedSlotState;
    case APPOINTMENT_ACTION_TYPES.UPDATE_APPOINTMENT:
      let newUpdatedSlotState = {
        ...state,
        slots: {
          ...state.slots,
          appointmentData: payload.appointmentData,
        },
      };
      return newUpdatedSlotState;
    default:
      return state;
  }
};
