import { Router } from 'express'
import * as controllers from '../controllers'

const router = Router()

router.get('/hello', controllers.hello)

export default router