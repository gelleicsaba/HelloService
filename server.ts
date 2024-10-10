export {}
const express = require('express')
const bodyParser = require('body-parser')

const aboutRouter = require('./routes/about.ts')
const weatherRouter = require('./routes/weather.ts')
const homeRouter = require('./routes/home.ts')
const settingsRouter = require('./routes/settings.ts')

const PORT:number = 3000
// flutter-hez nem működik a localhost
// ezért ip címre javítottam
const HOST_NAME:string = "192.168.0.101"

const app = express()
app.use(express.static("client"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use("/weather", weatherRouter)
app.use("/about", aboutRouter)
app.use("/", homeRouter)
app.use("/home", homeRouter)
app.use("/settings", settingsRouter)


app.listen(PORT, HOST_NAME, () => {
    console.log(`Server running at ${HOST_NAME}:${PORT}`)
})
