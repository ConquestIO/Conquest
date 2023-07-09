import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import query from "../models/testTrackerModel.js";
import dotenv from "dotenv";

dotenv.config();

const userController = {
  registerUser: async (req, res, next) => {

    const { username, password } = req.body;

    try {
      const text1 = "SELECT * FROM users WHERE username = $1;";
      const values1 = [username];
      const uniqueUsername = await query(text1, values1);
      // if usename not unique, return status code 400 & msg
      if (uniqueUsername.rows.length) throw new Error('Username not available')

      // if usename is unique, add username & hashed password to DB
      const hashedPassword = await bcrypt.hash(password, 10);
      const text =
        "INSERT INTO users (username, password) VALUES($1, $2) RETURNING *;";

      const values = [username, hashedPassword];
      const newUser = await query(text, values);
      // validate whether newUser is successfully added to DB
      if (!newUser.rows.length) throw new Error;
      return next();
    } catch (err) {
      return next({
        log: `Error in registerUser controller method: ${err}`,
        status: 500,
        message: { err: err.message },
      });
    }
  },

  loginUser: async (req, res, next) => {

    try {
      const text = "SELECT * FROM users WHERE username = $1;";
      const values = [req.body.username];
      const user = await query(text, values);
      if (!user.rows.length) {
        throw new Error('Incorrect username or password');
      }
      const isMatch = await bcrypt.compare(
        req.body.password,
        user.rows[0].password
      );
      if (!isMatch) {
        throw new Error('Incorrect username or password');
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
        status: 500,
        message: { err: err.message },
      });
    }
  },
};

export default userController;
