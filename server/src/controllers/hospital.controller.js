const httpStatus = require("http-status");
const { hospitalService } = require("../services");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");

const addHospital = catchAsync(async (req, res) => {
  if (!req.file) {
    throw new ApiError(httpStatus.FORBIDDEN, "Please upload image");
  }
  console.log(req.file);
  const result = await hospitalService.addHospital({
    ...req.body,
    image: req.file.filename,
  });
  res.send(result);
});
const getHospitals = catchAsync(async (req, res) => {
  const result = await hospitalService.getHospitals(req.query);
  res.send(result);
});
const getHospitalById = catchAsync(async (req, res) => {
  const result = await hospitalService.getHospitalById(req.params.id);
  res.send(result);
});
const deleteHospitalById = catchAsync(async (req, res) => {
  const result = await hospitalService.deleteHospitalById(req.params.id);
  res.send(result);
});

const updateHospitalById = catchAsync(async (req, res) => {
  const hospital = await hospitalService.updateHospitalById(
    req.params.id,
    req.body
  );
  res.send(hospital);
});

module.exports = {
  addHospital,
  getHospitals,
  deleteHospitalById,
  getHospitalById,
  updateHospitalById,
};
