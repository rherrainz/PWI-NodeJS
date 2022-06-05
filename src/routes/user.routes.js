import express from "express";
import { findUsersController, getUserController, createUserController, deleteUserController, updateUserController } from '../controller/user.controller.js'

export const userRouter = express.Router()

userRouter.get('/', (req, res) => {
    const user = findUsersController()
    res.send(user)
})


userRouter.get('/:id', (req, res) => {
    const userId = Number(req.params.id)
    const user = getUserController(userId)
    if (!user) res.send('<h1>No Existe Usuario</h1>')
    res.send(user)
})


userRouter.post('/', (req, res) => {
    const body = req.body
    console.log(body)
    const user = createUserController(body)
    res.send(user)
})

userRouter.delete('/:id', (req, res) => {
    const userId = Number(req.params.id)
    const user = deleteUserController(userId)
    if (!user) res.send('<h1>No Existe Usuario</h1>')
    res.send(user)
})

userRouter.put('/:id', (req, res) => {
    const body=req.body
    console.log(body)
    const userId = Number(req.params.id)
    const user = updateUserController(userId,body)
    if (!user) res.send('<h1>No Existe Usuario</h1>')
    res.send(user)
})