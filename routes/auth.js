import { Router } from "express";
const router = Router();
import { loginUser, registerUser, logoutUser } from "../controllers/auth.js";
import {
  validateRegisterUser,
  validateLoginUser,
} from "../middleware/validationMiddleware.js";

router.post("/register", validateRegisterUser, registerUser);
router.post("/login", validateLoginUser, loginUser);
router.get("/logout", logoutUser);

export default router;
