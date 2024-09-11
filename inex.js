process.on('uncaughtException',(err)=>{
    console.log(err);
})

import express from 'express'
import dotenv from 'dotenv'
import { dbConnection } from './database/dbConnection.js'
import { globalErorr } from './src/middleware/globalError.js';
import AppError from './src/utils/appError.js';
import userRouter from './src/modules/user/user.routes.js';
import taskRouter from './src/modules/task/task.routes.js';
import mongoose from 'mongoose';

console.log();
dbConnection()
dotenv.config()
const app = express()
const port = 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)








app.get('/', (req, res) => res.send('Hello World!'))
app.get('*',(req,res,next)=>{
    next(new AppError('this end point not existed',404))
})

app.use(globalErorr)
process.on('unhandledRejection',(err)=>{
    console.log(err);
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))