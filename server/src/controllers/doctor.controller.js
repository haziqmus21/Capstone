const httpStatus = require("http-status");
const { doctorService } = require("../services");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");

const addDoctor = catchAsync(async (req, res) => {
  if (!req.file) {
    throw new ApiError(httpStatus.FORBIDDEN, "Please upload image");
  }
  console.log(req.file);
  const result = await doctorService.addDoctor({
    ...req.body,
    image: req.file.filename,
  });
  res.send(result);
});
const getDoctors = catchAsync(async (req, res) => {
  const result = await doctorService.getDoctors(req.query);
  res.send(result);
});
const getDoctorById = catchAsync(async (req, res) => {
  const result = await doctorService.getDoctorById(req.params.id);
  res.send(result);
});
const deleteDoctorById = catchAsync(async (req, res) => {
  const result = await doctorService.deleteDoctorById(req.params.id);
  res.send(result);
});

const updateDoctorById = catchAsync(async (req, res) => {
  const doctor = await doctorService.updateDoctorById(req.params.id, req.body);
  res.send(doctor);
});
const searchDoctor = async (req, res) => {
  const doctor = await doctorService.searchDoctor(req.params.key);
  res.send(doctor);
};
module.exports = {
  addDoctor,
  getDoctors,
  deleteDoctorById,
  getDoctorById,
  updateDoctorById,
  searchDoctor,
};
