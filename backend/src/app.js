import express, { Router, json } from "express"

import cors from "cors"
// import router from "./routes/routes.js" 

import router from "./routes/products.js"


const app = express()

app.use(cors())
app.use(express.json())
app.use(router)




export default app
