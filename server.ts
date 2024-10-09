export {}
const express = require('express')
const bodyParser = require('body-parser')

const aboutRouter = require('./routes/about.ts')
const weatherRouter = require('./routes/weather.ts')
const homeRouter = require('./routes/home.ts')
const settingsRouter = require('./routes/settings.ts')

const PORT:number = 3000
const HOST_NAME:string = "localhost"

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
