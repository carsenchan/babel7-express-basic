import express from 'express'

import expressConfig from './config/express'
import mongooseConfig from './config/mongoose'

import defaultRoute from './routes/defaults'
import usersRoute from './routes/users'

const app = express()

const startConfig = [expressConfig, mongooseConfig]
const startUp = startConfig.map(startup=>startup(app))

const appPrimosed = Promise.all(startUp).then(()=>{
    app.use('/', defaultRoute)
    app.use('/api/users', usersRoute)
    return app
})

export default appPrimosed