const express = require("express");
const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const hospitalRoute = require("./hospital.route");
const doctorRoute = require("./doctor.route");
const bookingRoute = require("./booking.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },

  {
    path: "/user",
    route: userRoute,
  },
  {
    path: "/hospital",
    route: hospitalRoute,
  },
  {
    path: "/doctor",
    route: doctorRoute,
  },
  {
    path: "/booking",
    route: bookingRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
module.exports = router;
