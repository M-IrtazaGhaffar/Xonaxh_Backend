const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const { token } = req.body;
    if (token === "" || null) {
      res.status(200).json("No auth token");
    } else {
      jwt.verify(token, "XonaxhPakistanByM-IrtazaGhaffar", (err, auth) => {
        if (auth) {
          next();
        } else {
          res.status(200).json("Invalid auth token");
        }
      });
    }
  } catch (error) {
    console.log("Error: " + error);
    res.status(500).json("Some error occured!");
  }
};

module.exports = {
  verifyToken,
};
