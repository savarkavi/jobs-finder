import { Router } from "express";
const router = Router();

import {
  getAllJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
  showStats,
} from "../controllers/jobs.js";
import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";

router.get("/", getAllJobs);
router.post("/", validateJobInput, createJob);
router.get("/stats", showStats);
router.get("/:id", validateIdParam, getJob);
router.patch("/:id", validateJobInput, validateIdParam, updateJob);
router.delete("/:id", validateIdParam, deleteJob);

export default router;
