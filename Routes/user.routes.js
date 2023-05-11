const express = require("express");
const {
  login,
  contactform,
  reportform,
  userinfo,
  notifications,
  createOrder,
  allOrders,
  pendingOrders,
  deliveredOrders,
  changeNumber,
  paymentsAll,
  paymentsDone,
  paymentsPending,
  stock,
  stockDetail
} = require("../Controllers/user.controllers");
const { verifyToken } = require("../Middlewares/auth.middleware");
const routerUser = express.Router();

routerUser
  .post("/notifications", verifyToken, notifications)
  .post("/contactForm", verifyToken, contactform)
  .post("/reportForm", verifyToken, reportform)
  .post("/userInfo", verifyToken, userinfo)
  .post("/stock", verifyToken, stock)
  .post("/stockDetail", verifyToken, stockDetail)
  .post("/createOrder", verifyToken, createOrder)
  .post("/allOrders", verifyToken, allOrders)
  .post("/pendingOrders", verifyToken, pendingOrders)
  .post("/deliveredOrders", verifyToken, deliveredOrders)
  .post("/changeNumber", verifyToken, changeNumber)
  .post("/paymentsAll", verifyToken, paymentsAll)
  .post("/paymentsDone", verifyToken, paymentsDone)
  .post("/paymentsPending", verifyToken, paymentsPending)
  .post("/login", login);
module.exports = {
  routerUser,
};
