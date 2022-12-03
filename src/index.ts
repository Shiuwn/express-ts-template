import express from 'express'
import router from './router'
import morganMiddleware from './middlewares/morgan.middleware'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(morganMiddleware)
app.use('/', router)

const port = process.env.PORT || '3000'

app.listen(port, () => {
  console.log('server listening ' + port)
})


