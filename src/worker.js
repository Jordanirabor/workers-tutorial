const { parentPort, Worker, workerData, receiveMessageOnPort } = require('worker_threads');

parentPort.once("message", (message) => {
    console.log("second Worker: ",message)
})