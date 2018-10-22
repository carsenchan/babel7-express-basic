import appPromise from './src/server'
import dotenv from 'dotenv'
dotenv.config()
// Setup server
const isProduction = process.env.NODE_ENV === 'production'
//const port = process.env.PORT || 3002
const port  = 3030
appPromise.then((app)=>{
    app.listen(port, ()=>{
        console.log(`Server is listening port: ${port}`)
    })
})
