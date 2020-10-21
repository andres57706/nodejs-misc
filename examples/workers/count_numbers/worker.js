const { parentPort } = require('worker_threads');

module.exports = ({start, end}) => {  
  for (let index = start; index <= end; index++) {
    parentPort.postMessage(index)
  }
};

parentPort.on()
