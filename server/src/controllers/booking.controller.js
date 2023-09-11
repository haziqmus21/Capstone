const { bookingService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const addBooking = catchAsync(async (req, res) => {
  const result = await bookingService.addBooking(req.body);
  res.send(result);
});
const getBooking = catchAsync(async (req, res) => {
  const result = await bookingService.getBooking(req.query);
  res.send(result);
});
const getBookingById = catchAsync(async (req, res) => {
  const result = await bookingService.getBookingById(req.params.id);
  res.send(result);
});

module.exports = {
  addBooking,
  getBooking,
  getBookingById,
};
