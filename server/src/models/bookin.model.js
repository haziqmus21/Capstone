const mongoose = require("mongoose");
const { toJSON } = require("./plugins");

const bookingSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    doctorName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

bookingSchema.plugin(toJSON);

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
