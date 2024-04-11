import express from 'express'
import { LoginController, RegisterController, getUserProfileController } from '../controllers/UserController.js';
import { isAuth } from '../middlewares/AuthMiddleware.js';

// router Object
const router = express.Router();

router.post('/register',RegisterController);
router.post('/login', LoginController )
router.get('/profile', isAuth, getUserProfileController)




export default router;