import fs from 'fs'
import xml2js from 'xml2js'
import { createClient } from 'redis'

const parser = new xml2js.Parser()
let client = await connectRedis()

async function app() {
  fs.readFile('./data.xml', function (err, data) {
    parser.parseString(data, function (err, result) {
      console.log('Collected all data from XML')

      // Send to key: subdomains
      saveToREDIS('subdomains', JSON.stringify(result.config.subdomains[0].subdomain))

      // Send keys "cookie:%NAME%:%HOST%"
      for (let cookie of result.config.cookies[0].cookie) {
        const { key, value } = getCookieKey(cookie)
        saveToREDIS(key, value)
      }
    })
  })
}

async function connectRedis() {
  const redis = createClient()
  redis.on('error', (err) => console.log('Redis Client Error', err))
  return await redis.connect()
}

export function getCookieKey(obj) {
  const { _: value, $: objKeys } = obj
  return { key: `cookie:${objKeys.name}:${objKeys.host}`, value }
}

async function saveToREDIS(key, value) {
  await client.set(key, value)
  const confirmData = await client.get(key)
  console.log(confirmData)
  return confirmData
}

app()
