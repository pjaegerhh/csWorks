import express from 'express'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import userRoutes from './routes/user_routes'
import authRoutes from './routes/auth_routes'

import Template from './../template'
 import devBundle from './devBundle' // only for dev

import path from 'path'

// modules for server side rendering
//end


const CURRENT_WORKING_DIR = process.cwd()
const app = express()

 devBundle.compile(app) //only for dev


app.use(express.urlencoded({extended: true}));
app.use(express.json()) 
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.use('/',userRoutes)
app.use('/',authRoutes)

app.get('/',(req,res) => {
    res.status(200).send(Template())
})

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({"error" : err.name + ": " + err.message})
    }else if (err) {
      res.status(400).json({"error" : err.name + ": " + err.message})
      console.log(err)
    }
  })
  
export default app



