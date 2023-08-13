import { Router } from "express";
import {
  getCurrentUser,
  getApplicationStats,
  updatedUser,
} from "../controllers/user.js";
import { validateUpdateUser } from "../middleware/validationMiddleware.js";
import { authorizePermissions } from "../middleware/authUserMiddleware.js";
import upload from "../middleware/multerMiddleware.js";
const router = Router();

router.get("/current-user", getCurrentUser);
router.get("/application-stats", authorizePermissions, getApplicationStats);
router.patch(
  "/update-user",
  upload.single("avatar"),
  validateUpdateUser,
  updatedUser
);

export default router;
