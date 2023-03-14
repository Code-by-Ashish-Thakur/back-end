import express from 'express';
import dotenv from 'dotenv';

import cors from 'cors';

import bodyParser from 'body-parser';
import {v4 as uuid} from 'uuid';
import Connection from './database/dp.js';
import DefaultData from './default.js';
import Router from './routes/route.js';


const app=express();

dotenv.config();

app.use(cors());

app.use(bodyParser.json({ extended : true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/' , Router);
const PORT=8000;

const USERNAME =process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
app.get("/",(req,res)=>{res.send("<h1>Hurray ! Server is running</h1>")});

Connection(USERNAME,PASSWORD);
 app.listen(PORT,() => console.log(`Server is running successfully on PORT ${PORT}`));


 DefaultData();

 export let paytmMerchantKey=process.env.PAYTM_MERCHANT_KEY;

 export let paytmParams ={};
 paytmParams['MID']=process.env.PAYTM_MID;
 paytmParams['WEBSITE']=process.env.PAYTM_WEBSITE;
 paytmParams['CHANNEL_ID']=process.env.PAYTM_CHANNEL_ID;
 paytmParams['INDUSTRY_TYPE_ID']=process.env.PAYTM_INDUSTRY_TYPE_ID;
 paytmParams['ORDER_ID']=uuid();
paytmParams ['CUST_ID']=process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT']='10';
paytmParams['CALLBACK_URL']='https://back-end-seven-tawny.vercel.app/callback';
paytmParams['EMAIL']='at03052002@gmail.com';
paytmParams['MOBILE_NO']='1234567890';