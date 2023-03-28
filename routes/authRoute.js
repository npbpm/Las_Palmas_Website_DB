const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const Admin = require("../models/adminModel");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

//@route  /api/auth
//@desc   Get all admins
//@access Private
router.get("/", auth, async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id).select("-password");
    res.json(admin);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//@route  /api/auth
//@desc   Verify the admin connection
//@access Public
router.post(
  "/",
  /* auth, */
  [
    check("password", "A Password is required").not().isEmpty(),
    check("password", "Enter a password of at least 8 characters").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    const { name, password } = req.body;

    try {
      let admin = await Admin.findOne({ name });

      if (!admin) {
        return res.status(400).json({ msg: "No Admin Found" });
      }

      const isMatch = await bcrypt.compare(password, admin.password);

      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      const payload = {
        admin: {
          id: admin.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 36000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
