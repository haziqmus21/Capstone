const mongoose = require("mongoose");
const { toJSON } = require("./plugins");

const doctorSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },

    field: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      filename: String,
      originalName: String,
      mimetype: String,
      size: Number,
      url: String,
    },
  },
  {
    timestamps: true,
  }
);

doctorSchema.plugin(toJSON);

const Doctors = mongoose.model("Doctors", doctorSchema);

module.exports = Doctors;
