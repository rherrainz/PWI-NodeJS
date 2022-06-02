import express from "express";
import { findUsersController } from '../controller/user.controller.js'

export const userRouter = express.Router()

userRouter.get('/', (req, res) => {
    const user = findUsersController()
    res.send(user)
})


// userRouter.get('/:id', (req, res)=>{
//     const userId = req.params.id
//     res.send("Ahora la ruta existe " + userId)
// })


