import app from './src/server'

// Setup server
const isProduction = process.env.NODE_ENV === 'production'
const port = isProduction? process.env.PORT : 3001

app.listen(port, ()=>{
    console.log(`Server is listening port: ${port}`)
})