import { combineReducers } from "redux";
import { appointmentSlotsReducer } from "./appointment/appointment.reducer";

export const rootReducer = combineReducers({
  appointmentSlots: appointmentSlotsReducer,
});
