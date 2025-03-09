import express from 'express';
import { 
    loginControllers, 
    registerControllers,  
    verifyTokenController,
    getUserController 
} from '../controllers/userController.js';
import { authenticateToken } from "../middlewares/authMiddleware.js"; 
const router = express.Router();

router.post("/register", registerControllers);
router.post("/login", loginControllers);
router.get("/verifyToken", verifyTokenController);
router.get("/getUser", authenticateToken, getUserController);

export default router;
