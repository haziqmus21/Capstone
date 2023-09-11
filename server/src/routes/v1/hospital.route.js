const express = require("express");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");
const upload = require("../../middlewares/upload");
const hospitalController = require("../../controllers/hospital.controller");
const hospitalValidation = require("../../validations/hospital.validation");

const router = express.Router();

router
  .route("/")
  .post(
    auth("addHospital"),
    upload.single("file"),
    hospitalController.addHospital
  )
  .get(auth("getHospitals"), hospitalController.getHospitals);

router
  .route("/:id")
  .delete(auth("deleteHospitalById"), hospitalController.deleteHospitalById)
  .get(hospitalController.getHospitalById)
  .put(auth("updateHospitalById"), hospitalController.updateHospitalById);

module.exports = router;
