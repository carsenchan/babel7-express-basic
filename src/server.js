import express from 'express'

import expressConfig from './config/express'

const app = express()

const startConfig = [expressConfig]
const startUp = startConfig.map(startup=>startup(app))

const appPrimosed = Promise.all(startUp).then(()=>{

    app.get('/', (req, res)=>res.send('hello'))

    return app
})

export default appPrimosed