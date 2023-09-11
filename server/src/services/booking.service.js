const { Booking } = require("../models");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");

const addBooking = async (HospitalBody) => {
  const existingAppointment = await Booking.findOne({
    date: HospitalBody.date,
  });
  if (existingAppointment) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Appointment already booked for this date"
    );
  }
  return Booking.create(HospitalBody);
};

// const addBooking = async (HospitalBody) => {
//   const booking = Booking.create(HospitalBody);
//   return booking;
// };
const getBooking = async (query) => {
  const allBooking = await Booking.find(query);
  return allBooking;
};
const getBookingById = async (id) => {
  return Booking.findById(id);
};
module.exports = {
  addBooking,
  getBooking,
  getBookingById,
};
