const catchAsync = require("../utils/catchAsync");
const { userService } = require("../services");

const getEditors = catchAsync(async (req, res) => {
  const editors = await userService.queryUsers({ role: "editor" });
  res.send(editors);
});
const userProfile = catchAsync(async (req, res) => {
  const user = await userService.userProfile(req.params.id);
  res.send(user);
});
const getAllUsers = catchAsync(async (req, res) => {
  const users = await userService.queryUsers();
  res.send(users);
});

const changePassword = catchAsync(async (req, res) => {
  const user = await userService.changePassword(req.user.id, req.body);
  res.send({ user, message: "Password changed successfully" });
});

module.exports = {
  getEditors,
  changePassword,
  getAllUsers,
  userProfile,
};
