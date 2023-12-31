import { Router } from 'express';
import { authController } from '../controllers';
import { authorization } from '../middlewares';

const router = Router();

router.post('/register', authController.register);

router.post('/login', authController.login);

router.post('/logout', authorization, authController.logout);

router.post('/forgot-password', authController.forgotPassword);

router.post('/reset-password', authController.resetPassword);

export default router;
