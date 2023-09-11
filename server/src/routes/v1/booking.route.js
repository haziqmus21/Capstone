const express = require("express");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");
const bookingController = require("../../controllers/booking.controller");
const bookingValidation = require("../../validations/booking.validation");

const router = express.Router();

router
  .route("/")
  .post(
    auth("addBooking"),
    validate(bookingValidation.addBooking),
    bookingController.addBooking
  )
  .get(auth("getBooking"), bookingController.getBooking);
router.route("/:id").get(bookingController.getBookingById);

module.exports = router;
