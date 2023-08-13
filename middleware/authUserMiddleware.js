import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json("unauthenticated user");
  }
  try {
    const { userId, role } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId, role };
    next();
  } catch (error) {
    return res.status(401).json("unauthenticated user");
  }
};

export const authorizePermissions = async (req, res, next) => {
  console.log(req.user.role);
  if (req.user.role !== "admin") {
    return res.status(StatusCodes.UNAUTHORIZED).json("Unauthoried route");
  }
  next();
};
