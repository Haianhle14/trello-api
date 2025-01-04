import express from 'express'
import { StatusCodes } from 'http-status-codes'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ massage: 'GET: APIs get list board.' })
  })
  .post((req, res) => {
    res.status(StatusCodes.CREATED).json({ massage: 'POST: APIs create new board.' })
  })

export const boardRouters = Router