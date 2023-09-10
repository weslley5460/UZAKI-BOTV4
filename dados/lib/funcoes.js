const log = console.log 
const cfonts = require("cfonts")
const fs = require('fs')
const spin = require('spinnies')
const spin1 = require('spinnies')
const Pino = require('pino')
const chalk = require('chalk')
const axios = require('axios')
const moment = require("moment-timezone")

const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY')

const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text)
}
const getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'adm') admins.push(i.id)}
return admins}

module.exports = {
log, color, hora, getGroupAdmins ,data
}


