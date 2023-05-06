const StockModel = require("../Model/stock.model.js");
const appealModel = require("../Model/appeal.model.js");
const contactModel = require("../Model/contact.model.js");
const notificationsModel = require("../Model/notifications.model.js");
const orderModel = require("../Model/order.model.js");
const reportModel = require("../Model/report.model.js");
const userModel = require("../Model/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userinfo = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await userModel.find({
      id: id,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json("Some error occured!");
  }
};

const contactform = async (req, res) => {
  try {
    const { id, name, subject, detail } = req.body;
    await contactModel.insertMany([
      {
        marketerid: id,
        name: name,
        subject: subject,
        detail: detail,
      },
    ]);
    res.status(200).json("Data submitted!");
  } catch (error) {
    res.status(500).json("Some error occured!");
  }
};

const reportform = async (req, res) => {
  try {
    const { id, report } = req.body;
    await reportModel.insertMany([
      {
        marketerid: id,
        report: report,
      },
    ]);
    res.status(200).json("Data submitted!");
  } catch (error) {
    res.status(500).json("Some error occured!");
  }
};

const notifications = async (req, res) => {
  try {
    const notifications = await notificationsModel
      .find()
      .limit(25)
      .sort({ date: -1 });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json("Some error occured!");
  }
};

const createOrder = async (req, res) => {
  try {
    const {
      marketerid,
      clothid,
      price,
      client,
      paymentnumber,
      address,
      marketerpayment,
      quantity,
      waist,
      length,
      shoulders,
      sleeves, 
      daman,
      colloar,
      armhole,
      chest
    } = req.body;
    await orderModel.insertMany([
      {
        marketerid: marketerid,
        clothID: clothid,
        price: price,
        clientName: client,
        clientNumber: paymentnumber,
        address: address,
        marketerPayment: marketerpayment,
        quantity: quantity,
        waist: waist,
        length: length,
        shoulders: shoulders,
        sleeves: sleeves,
        daman: daman,
        colloar: colloar,
        armhole: armhole,
        chest: chest
      },
    ]);
    res.status(200).json("Data submitted!");
  } catch (error) {
    console.log(req.body);
    console.log(error);
    res.status(500).json("Some error occured!");
  }
};

const allOrders = async (req, res) => {
  try {
    const { id } = req.body;
    const orders = await orderModel
      .find({
        marketerid: id,
      })
      .sort({ dateOrdered: -1 })
      .limit(100);
    res.json(orders);
  } catch (error) {
    console.log("Error: " + error);
    res.status(500).json("Some error occured!");
  }
};

const pendingOrders = async (req, res) => {
  try {
    const { id } = req.body;
    const orders = await orderModel
      .find({
        marketerid: id,
        deliveryStatus: false,
      })
      .sort({ dateOrdered: -1 })
      .limit(100);
    res.json(orders);
  } catch (error) {
    console.log("Error: " + error);
    res.status(500).json("Some error occured!");
  }
};

const deliveredOrders = async (req, res) => {
  try {
    const { id } = req.body;
    const orders = await orderModel
      .find({
        marketerid: id,
        deliveryStatus: false,
      })
      .sort({ dateOrdered: -1 })
      .limit(100);
    res.json(orders);
  } catch (error) {
    console.log("Error: " + error);
    res.status(500).json("Some error occured!");
  }
};

const login = async (req, res) => {
  try {
    // How to password was Hashed?
    // const hash = await bcrypt.hash(pass, 10).then()

    const { email, password } = req.body;
    const findUser = await userModel.find({
      email: email,
    }, { "email": 0, "fname": 0, "lname": 0, "father": 0, "age": 0, "gender": 0, "country": 0, "state": 0, "city": 0, "mobile": 0, "date": 0 });
    if (findUser.length !== 0) {
      const result = await bcrypt
        .compare(password, findUser[0].password)
        .then();
      if (result) {
        const JWTtoken = jwt.sign(
          {
            data: email,
          },
          "XonaxhPakistanByM-IrtazaGhaffar",
          { expiresIn: 60 * 60 * 24 }
        );
        res.status(200).json({ user: findUser[0], token: JWTtoken, login: true }); 
      } else {
        res.status(200).json({ msg: "Wrong password", login: false });
      }
    } else {
      res.status(200).json({ msg: "User doesn't exist", login: false });
    }
  } catch (error) {
    res.status(500).json("Some error occured!");
  }
};

const changeNumber = async (req, res) => {
  try {
    const { id, newNumber } = req.body;
    await appealModel.insertMany([
      {
        marketerid: id,
        newNumber: newNumber,
      },
    ]);

    res.status(500).json("Request sent");
  } catch (error) {
    console.log(error);
    res.status(500).json("Some error occured!");
  }
};

const paymentsDone = async (req, res) => {
  try {
    const { id } = req.body;
    const payment = await orderModel
      .find({
        marketerid: id,
        deliveryStatus: true,
        orderConfirmation: true,
        marketerPaymentStatus: true,
      })
      .sort({ dateOrdered: -1 });
    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json("Some error occured!");
  }
};

const paymentsPending = async (req, res) => {
  try {
    const { id } = req.body;
    const payment = await orderModel
      .find({
        marketerid: id,
        deliveryStatus: true,
        orderConfirmation: true,
        marketerPaymentStatus: false,
      })
      .sort({ dateOrdered: -1 });
    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json("Some error occured!");
  }
};

const paymentsAll = async (req, res) => {
  try {
    const { id } = req.body;
    const payment = await orderModel.find({
      marketerid: id,
      deliveryStatus: true,
      orderConfirmation: true,
    });
    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json("Some error occured!");
  }
};

const stock = async (req, res) => {
  try {
    const stock = await StockModel.find().sort({ date: -1 });
    res.status(200).json(stock);
  } catch (error) {
    res.status(500).json("Some error occured!");
  }
};

module.exports = {
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
};
