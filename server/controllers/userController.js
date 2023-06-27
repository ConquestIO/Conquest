import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import query from "../models/testTrackerModel.js";
import dotenv from "dotenv";

dotenv.config();

const userController = {
  registerUser: async (req, res, next) => {
    console.log("<--userController - registerUser is invoked-->");
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const text =
        "INSERT INTO users (username, password) VALUES($1, $2) RETURNING *";

      const values = [req.body.username, hashedPassword];
      const newUser = await query(text, values);
      res.locals.user = newUser.rows[0];
      return next();
    } catch (err) {
      return next({
        log: `Error in registerUser controller method: ${err}`,
        status: 400,
        message: "Error while registering new user",
      });
    }
  },

  loginUser: async (req, res, next) => {
    console.log("<--userController - loginUser is invoked-->");
    try {
      const text = "SELECT * FROM users WHERE username = $1";
      const values = [req.body.username];
      const user = await query(text, values);
      if (!user.rows.length) {
        throw new Error("No user found with this username");
      }
      const isMatch = await bcrypt.compare(
        req.body.password,
        user.rows[0].password
      );
      if (!isMatch) {
        throw new Error("Incorrect password");
      }
      const token = jwt.sign(
        { userId: user.rows[0]._id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.cookie("jwtToken", token, { httpOnly: true });
      res.locals.user = {
        token,
        user: user.rows[0].username,
      };
      return next();
    } catch (err) {
      return next({
        log: `Error in loginUser controller method ${err}`,
        status: 400,
        message: { err: err.message },
      });
    }
  },
};

export default userController;
