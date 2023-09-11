const express = require("express");
const upload = require("../../middlewares/upload");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");
const doctorController = require("../../controllers/doctor.controller");
const doctorValidation = require("../../validations/doctor.validation");

const router = express.Router();

router
  .route("/")
  .post(auth("addDoctor"), upload.single("file"), doctorController.addDoctor)
  .get(auth("getDoctors"), doctorController.getDoctors);

router
  .route("/:id")
  .delete(auth("deleteDoctorById"), doctorController.deleteDoctorById)
  .get(doctorController.getDoctorById)
  .put(auth("updateDoctorById"), doctorController.updateDoctorById);

router.route("/search/:key").get(doctorController.searchDoctor);
module.exports = router;
