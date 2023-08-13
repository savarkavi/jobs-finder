import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import Job from "../models/Job.js";
import cloudinary from "cloudinary";
import fs from "fs/promises";

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  res.status(StatusCodes.OK).json({ user });
};

export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const jobs = await Job.countDocuments();
  res.status(StatusCodes.OK).json({ users, jobs });
};

export const updatedUser = async (req, res) => {
  const newUser = { ...req.body };
  const response = await cloudinary.v2.uploader.upload(req.file.path);
  await fs.unlink(req.file.path);
  newUser.avatar = response.secure_url;
  newUser.avatarPublicId = response.public_id;
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);
  if (req.file && updatedUser.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
  }
  res.status(StatusCodes.OK).json(updatedUser);
};
