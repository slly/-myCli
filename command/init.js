'use strict'
const exec = require('child_process').exec
const projectUrl = 'https://github.com/slly/myCli.git'

module.exports = () => {
    console.log('pushing >>>>>> ')
    let cmdStr = `git clone `+projectUrl

    exec(cmdStr, (error, stdout, stderr) => {
        if (error) {
            console.log(error)
            process.exit()
        }
        console.log('pull success !')
        process.exit()
    })

}