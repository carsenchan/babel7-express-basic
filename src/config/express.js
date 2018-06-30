
import bodyParser from "body-parser";
import morgan from 'morgan'
import compression from "compression";
import methodOverride from 'method-override'

const appPromise = app =>{
  app.use(methodOverride())

  app.use(bodyParser.urlencoded({extended:true}))
  app.use(bodyParser.json())
  app.use(bodyParser.json({type:'application/vnd.api+json'}))

  app.use(morgan('dev'))
  app.use(compression())
}

export default appPromise