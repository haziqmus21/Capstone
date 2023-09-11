const userPermissions = [
  "getDoctors",
  "getHospitals",
  "addBooking",
  "getBooking",
  "getBookingById",
  "searchDoctor",
  "userProfile",
];

const adminPermissions = [
  "addDoctor",
  "addHospital",
  "getDoctors",
  "getHospitals",
  "deleteDoctorById",
  "deleteHospitalById",
  "getHospitalById",
  "getDoctorById",
  "updateHospitalById",
  "updateDoctorById",
  "searchDoctor",
];

const allRoles = {
  user: userPermissions,
  admin: adminPermissions,
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
