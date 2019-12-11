const { Worker, isMainThread, parentPort }  = require('worker_threads');

if (isMainThread) {
    const worker =  new Worker(__filename);
    worker.once('message', (message) => {
        console.log(message); //prints 'Worker thread: Hello!'
    });
    worker.postMessage('Main Thread: Hi!');
} else {
    parentPort.once('message', (message) => {
        console.log(message) // prints 'Main Thread: Hi!'
        parentPort.postMessage("Worker thread: Hello!");
    });
}
