export {}
const express = require('express')
const properties = require('../package.json')

const aboutRoute = express.Router()

aboutRoute.get("/", (req?: any, res?: any)=> {
    const aboutInfo ={
        siteName: "About",
        name: properties.name,
        description: properties.description,
        author: properties.author
    }
    res.json(aboutInfo)
})

module.exports = aboutRoute