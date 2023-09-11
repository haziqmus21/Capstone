const { Hospital } = require("../models");

const addHospital = async (HospitalBody) => {
  const hospital = Hospital.create(HospitalBody);
  return hospital;
};
const getHospitals = async (query) => {
  const hospitals = await Hospital.find(query);
  return hospitals;
};
const getHospitalById = async (id) => {
  return Hospital.findById(id);
};
const updateHospitalById = async (HospitalId, updateHospital) => {
  const hospital = await getHospitalById(HospitalId);
  if (!hospital) {
    throw new ApiError(httpStatus.NOT_FOUND, "hospital not found");
  }
  Object.assign(hospital, updateHospital);
  await hospital.save();
  return hospital;
};
const deleteHospitalById = async (id) => {
  return Hospital.findByIdAndDelete(id);
};

module.exports = {
  addHospital,
  getHospitals,
  deleteHospitalById,
  getHospitalById,
  updateHospitalById,
};
