import { body, param, validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import mongoose from "mongoose";
import Job from "../models/Job.js";

const withValidationErrors = (validationValues) => {
  return [
    validationValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log(errors);
        const errorMessages = errors.array().map((err) => err.msg);
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ error: errorMessages });
      }
      next();
    },
  ];
};

export const validateJobInput = withValidationErrors([
  body("company").notEmpty().withMessage("Company name is required"),
  body("position").notEmpty().withMessage("Position is required"),
  body("location").notEmpty().withMessage("Job location is required"),
  body("jobStatus")
    .isIn(["interview", "done", "pending"])
    .withMessage("In-valid job status"),
  body("jobType")
    .isIn(["full-time", "part-time", "internship"])
    .withMessage("In-valid job type"),
]);

export const validateIdParam = withValidationErrors([
  param("id").custom(async (value, { req, res }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) throw new Error("Invalid id");
    const job = await Job.findById(value);
    if (!job) throw new Error(`No job with id ${value}`);
    const isAdmin = req.user.role === "admin";
    const isOwner = req.user.userId === job.createdBy.toString();

    if (!isAdmin && !isOwner)
      throw new Error("not authorized to access this route");
  }),
]);

export const validateRegisterUser = withValidationErrors([
  body("name").notEmpty().withMessage("Name is required"),

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new Error("User already exists");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("password must be atleast 8 characters long"),
  body("location").notEmpty().withMessage("Location is required"),
]);

export const validateLoginUser = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email"),

  body("password").notEmpty().withMessage("Password is required"),
]);

export const validateUpdateUser = withValidationErrors([
  body("name").notEmpty().withMessage("Name is required"),

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email")
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new Error("User already exists");
      }
    }),

  body("location").notEmpty().withMessage("Location is required"),
]);
