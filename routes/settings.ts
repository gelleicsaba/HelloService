import { writeFile } from "fs"

const express = require('express')
const { readFile } = require('node:fs/promises')
const { resolve } = require('node:path')

const settingsRoute = express.Router()

interface IDataNode {
    greetings?: string
    weather?: string
}

const getData = async (): Promise<IDataNode> => {
    const filePath = resolve('../settings/settings.json')
    const contents = await readFile(filePath, { encoding: 'utf8' })
    return contents
}

const setGreetings = async (greetings?: string): Promise<boolean> => {
    const filePath = resolve('../settings/settings.json')
    const data: IDataNode = await readFile(filePath, { encoding: 'utf8' })
    data.greetings = greetings
    await writeFile(filePath, JSON.stringify(data), ()=> {
        console.log("Write error!")
        return false
    })
    return true
}

settingsRoute.get("/", async function(req, res) {
    const data: IDataNode = await getData()
    res.json(data)
})

settingsRoute.put("/", async function(req, res) {
    await setGreetings(req.greetings)
    console.log(req)
})

module.exports = settingsRoute