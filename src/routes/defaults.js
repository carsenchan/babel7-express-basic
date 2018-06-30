import express from 'express'

const router = express.Router()

router.get('/', (req, res)=>{
  res.status(404).send(new Error({message:'Not Found!'}))
})

router.post('/', (req, res)=>{
  res.status(404).send(new Error({message:'Not Found!'}))
})

router.put('/', (req, res)=>{
  res.status(404).send(new Error({message:'Not Found!'}))
})

router.delete('/', (req, res)=>{
  res.status(404).send(new Error({message:'Not Found!'}))
})

export default router