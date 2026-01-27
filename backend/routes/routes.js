import express, {Router} from 'express'
import { User } from "../models/user.js";

import authController from '../controller/authController.js';



const routes = express.Router ();

router.post('/register')
router.post('/login', authController)




export default routes
