const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Admin = require("../models/adminModel");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

//@route  /api/admin
//@desc   Post a new admin
//@access Public
router.post(
  "/",
  auth,
  [
    check("name", "Admin Name is required").not().isEmpty(),
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
      let admin = Admin.findOne({ name });

      if (admin) {
        Admin.remove({ name }, () => {
          console.log("Old Admin was removed");
        });
      }

      admin = new Admin({
        name,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      admin.password = await bcrypt.hash(password, salt);

      await admin.save();

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
      res.status(500);
    }
  }
);

module.exports = router;
