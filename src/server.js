import express from 'express'
import morgan from 'morgan'

const app  = express()
app.use(morgan('dev'))

app.get('/', (req, rep)=>{
    rep.status(200).send('Defautl call, no response')
})



export default app