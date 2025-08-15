import jwt from "jsonwebtoken";
import ApiError from "./ApiError.js";
import User from "../models/users.model.js";

const verifyUser = async (token: string) => {
  if (!token) throw new ApiError(401, "Token is Required");

  const secret = process.env.ACCESS_TOKEN_SECRET;
  if (!secret) throw new ApiError(500, "ACCESS_TOKEN_SECRET is not defined");
  const { _id } = jwt.verify(token, secret) as { _id: string };

  const user = await User.findById(_id);

  return user;
};

export default verifyUser;
