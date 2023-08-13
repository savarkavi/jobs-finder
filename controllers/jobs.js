import Job from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import day from "dayjs";

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const createdJob = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ createdJob });
};

export const getJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);
    res.status(StatusCodes.OK).json({ job });
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json("No job found");
  }
};

export const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedJob = await Job.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ msg: "job modified", updatedJob });
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json("No job found");
  }
};

export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const removedJob = await Job.findByIdAndDelete(id);
    res.status(StatusCodes.OK).json({ msg: "job deleted", removedJob });
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json("No job found");
  }
};

export const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$jobStatus", count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    done: stats.done || 0,
  };
  res.status(StatusCodes.OK).json({ defaultStats });
};
