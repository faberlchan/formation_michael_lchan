// import express, {Express, Request, Response} from "express"
import express from "express"

const app   = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => { res.send("hello world!")})

app.listen(PORT, () =>  console.log("currently listening to port" + PORT))

console.log("app = " + app)
console.log("port = " + PORT)
console.log("process.env.PORT = " + process.env.PORT)

