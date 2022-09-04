import request from "supertest";
import app from "./server.js";

describe("Test Server is running or not", () => {
  test("It should return success message", async () => {
    const response = await request(app).get("/api");
    expect(response.statusCode).toBe(200);
  });
});

describe("Test GET /api/appointments", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app).get("/api/appointments");
    expect(response.statusCode).toBe(200);
  });
});

describe("Test POST /api/bookappointment", () => {
  // mock request object
  const postAppointmentData = {
    userName: "",
    userPhone: "123456789",
    available: true,
    appointmentTime: "10:00am-11:00am",
    id: 102,
  };

  test("It should respond with 404 while userName is empty", async () => {
    const response = await request(app)
      .post("/api/bookappointment")
      .send(postAppointmentData)
      .expect(400);
  });

  test("It should respond with 404 while userPhone is empty", async () => {
    postAppointmentData.userPhone = "";
    const response = await request(app)
      .post("/api/bookappointment")
      .send(postAppointmentData)
      .expect(400);
  });
});
