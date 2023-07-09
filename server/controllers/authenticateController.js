import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authenticateController = {
  authenticateUser: async (req, res, next) => {

    const token = req.cookies.jwtToken;
    if (!token) {
      return res.status(400).json({ message: "No token provided" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(400);
      req.user = user;
      next();
    });
  },
};

export default authenticateController;
