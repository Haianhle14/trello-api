/* eslint-disable no-console */

import express from 'express'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, CLOSE_DB } from '~/config/mongodb'
import { env } from '~/config/environment'
import { APIs_V1 } from './routes/v1'
const START_SERVER = () => {
  const app = express()

  app.use(express.json())
  //Use APIs V1
  app.use('/v1', APIs_V1)

  app.get('/', (req, res) => {
    res.end('<h1>Hello World!</h1><hr>')
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Hello ${env.AUTHOR}, Back-end Server is running successfully at Host:${env.APP_HOST} and Port: ${env.APP_PORT}`)
  })

  exitHook(() => {
    CLOSE_DB()
  })
}

CONNECT_DB()
  .then(() => console.log('Connected to MongoDB Atlas!'))
  .then(() => START_SERVER())
  .catch(error => {
    console.error(error)
    process.exit(0)
  })

