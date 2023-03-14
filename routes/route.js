import express from 'express';

import { userSignup ,userLogin} from '../controller/user-controller.js';
import { getProducts ,grtProductById} from '../controller/product-controller.js';
import { addPaymentGateway,paytmResponse } from '../controller/payment-controller.js';
const router =express.Router();


router.post('/signup' , userSignup);
router.post('/login', userLogin);

router.get('/products',getProducts);
router.get('/product/:id', grtProductById);

router.post('/payment',addPaymentGateway);
router.post('/callback',paytmResponse);

export default router;  