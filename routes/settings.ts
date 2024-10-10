export {}
const express = require('express')
import { writeFile } from "fs"

const { readFile } = require('node:fs/promises')
const { resolve } = require('node:path')

const settingsRoute = express.Router()

interface IDataNode {
    greetings?: string
    weather?: string
}

const getData = async (): Promise<IDataNode> => {
    const filePath = resolve('settings/settings.json')
    const contents = await readFile(filePath, { encoding: 'utf8' })
    return JSON.parse(contents)
}

const setGreetings = async (greetings?: string): Promise<boolean> => {
    const filePath = resolve('settings/settings.json')
    const data: IDataNode = JSON.parse(await readFile(filePath, { encoding: 'utf8' }))
    data.greetings = greetings
    await writeFile(filePath, JSON.stringify(data), ()=> { })
    return true
}

settingsRoute.get("/", async function(req?: any, res?: any) {
    const data: IDataNode = await getData()
    res.json(data)
})

settingsRoute.put("/", async (req?: any, res?: any) => {
    const data = req.body
    console.log(data)
    await setGreetings(data.greetings)
    res.json({"success": true})
})

module.exports = settingsRoute

// curl.exe -X PUT -H "Content-Type: application/json" -d '{"greetings":"Hi"}' "http://localhost:3000/settings/"