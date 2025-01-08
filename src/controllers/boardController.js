import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'

const createNew = async(req, res, next) => {
  try {
    // console.log('req.body: ', req.body)
    // console.log('req.query: ', req.query)
    // console.log('req.params: ', req.params)


    // throw new ApiError(StatusCodes.BAD_GATEWAY, 'lehaianh test error')


    res.status(StatusCodes.CREATED).json({ massage: 'POST from Controller: APIs create new board.' })
  } catch (error) { next(error) }
}

export const boardController = {
  createNew
}