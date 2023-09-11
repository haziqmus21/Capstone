const mongoose = require("mongoose");
const { toJSON } = require("./plugins");

const hospitalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
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

hospitalSchema.plugin(toJSON);

const Hospital = mongoose.model("Hospital", hospitalSchema);

module.exports = Hospital;
