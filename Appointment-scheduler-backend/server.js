import express from "express";
import appointments from "./data.js";
import cors from "cors";

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

// app.get("/api/appointments/:id", (req, res) => {
//   const appointment = appointments.appointments.find(
//     (item) => item.id === req.params.id
//   );
//   if (appointment) {
//     res.send(appointment);
//   } else {
//     res.status(404).send({ message: "appointment not found" });
//   }
// });

app.get("/api/appointments", (req, res) => {
  res.send(appointments);
});

app.get("/", (req, res) => {
  res.send("Server is available");
});

// Adds the slot to the database
const addToDatabase = (appointment, userName, userPhone, available, appointmentTime,id) => {
  let code = 'ghghfjh';
  const objToSave = {
    userPhone,
    userName,
    available,
    appointmentTime,
    id,
  };
  console.log(objToSave, "objToSave");
  appointment[id] = objToSave;
  //  appointObj.push(code, objToSave);
  return code;
};

app.post("/api/bookappointment", async (request, response) => {
  console.log(request.body)
  const { userName, userPhone, available, appointmentTime,id } = request.body;
console.log(userName, userPhone, available, appointmentTime,id);
console.log(appointments,'appointments')
  const appointment = appointments.appointmentData.find(
    (item) => item.id === id
  );
  if (appointment) {
    let code = addToDatabase(appointment, userName, userPhone, available, appointmentTime,id);
    response.json({
      error: false,
      message: `Appointment booked for ${userName}!`,
      id
    });
  } else {
    res.status(404).send({ message: "appointment not found" });
  }

  // if (!phonenumber && !name) {
  //   response.status(400).json({
  //     error: true,
  //     message: "Missing data",
  //   });
  // }
  //res.status(200).send("sdasda");
  // let code = addToDatabase(phonenumber, name);
  // response.json({
  //   error: false,
  //   message: `Slot booked for :${name}.  Please save this code: ${code} in case you'd like to cancel your appointment.`,
  // });
});

const port = process.env.PORT || 9000;

app.listen(9000, () => {
  console.log(`Running at https://127.0.0.1:${port}`);
});
