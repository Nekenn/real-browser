
import express from 'express';
import router from './src/routes/route.js';
import cors from 'cors';
const app = new express();



//midle-ware
app.use(cors());
app.use(express.json());
app.use('/',router);

app.listen(3000,()=>{
})