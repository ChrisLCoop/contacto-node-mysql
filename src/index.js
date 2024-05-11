import express from 'express'
import indexRouter from './routes/index.routes.js'
import {dirname,join} from 'path'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'


const app =express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const __dirname= dirname(fileURLToPath(import.meta.url))

app.set('views',join(__dirname,'views'))
app.set('view engine','ejs')


app.use(indexRouter)

app.listen(3000)

console.log('servidor 3000 en uso')

app.use(express.static(join(__dirname,'public')))