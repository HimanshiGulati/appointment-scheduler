import express from "express";
import appointments from "./data.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Get all existing appointments
app.get("/api/appointments", (req, res) => {
  res.send(appointments);
});

// check whether server is running or not
app.get("/api", (req, res) => {
  res.send("Server is available");
});

// Post method to validate the request and store the required appointment
app.post("/api/bookappointment", async (request, response) => {
  const { userName, userPhone, id } = request.body;

  // get the appointment object that needs to be updated
  const appointment = appointments.appointmentData.find(
    (item) => item.id === id
  );

  // validate userPhone and userName sent from frontend
  if (!userName || !userPhone) {
    response.status(400).json({
      error: true,
      message: "Bad request! Missing required data",
      id,
    });
  } else if (!appointment) {
    // return 404 when appointment not found to update
    response.status(404).send({
      error: true,
      message: "Bad Request! Appointment not found",
      id,
    });
  } else {
    // book the appointment when all the data is valid
    appointment[id] = request.body;
    response.status(200).json({
      error: false,
      message: `Appointment booked for ${userName}!`,
      id,
    });
  }
});

const port = 9000;

const myapp = app.listen(port, () => {
  console.log(`Running at https://127.0.0.1:${port}`);
});

export default myapp;
