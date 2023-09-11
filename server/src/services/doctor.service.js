const { Doctors } = require("../models");

const addDoctor = async (doctorBody) => {
  const doctor = Doctors.create(doctorBody);
  return doctor;
};
const getDoctors = async (query) => {
  const doctors = await Doctors.find(query);
  return doctors;
};
const getDoctorById = async (id) => {
  return Doctors.findById(id);
};
const updateDoctorById = async (DoctorId, updateDoctor) => {
  const doctor = await getDoctorById(DoctorId);
  if (!doctor) {
    throw new ApiError(httpStatus.NOT_FOUND, "doctor not found");
  }
  Object.assign(doctor, updateDoctor);
  await doctor.save();
  return doctor;
};
const deleteDoctorById = async (id) => {
  return Doctors.findByIdAndDelete(id);
};

const searchDoctor = async (key) => {
  const doctor = await Doctors.find({
    $or: [
      { firstName: { $regex: key, $options: 'i' } },
      { lastName: { $regex: key, $options: 'i' } },
      { field: { $regex: key, $options: 'i' } },
    ],
  });
  return doctor;
};

module.exports = {
  addDoctor,
  getDoctors,
  deleteDoctorById,
  updateDoctorById,
  getDoctorById,
  searchDoctor,
};
