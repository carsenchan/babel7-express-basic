import {Router} from 'express'

import User from '../models/User'

const router = Router()

router.get('/', (req, res)=>{
  User.find().then(data=>{
    res.json(data)
  })
})

export default router
