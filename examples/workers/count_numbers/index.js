const path = require("path");
const { Worker, isMainThread } = require("worker_threads");
const countNumbersWorker = require("./worker");

function runService(workerData) {
  return new Promise((resolve, reject) => {
    if (isMainThread) {
      const worker = new Worker(__filename, {
        workerData,
      });
      worker.on("message", (result) => console.log(result));
      worker.on("error", reject);
      worker.on("exit", (code) => {
        if (code !== 0)
          reject(
            new Error(`Stopped the Worker Thread with the exit code: ${code}`)
          );
        resolve("job done!!");
      });
    } else {
      countNumbersWorker(workerData);
    }
  });
}

async function run() {
  while (true) {
    const result = await runService({ start: 1, end: 5 });
    console.log(result);
    console.log(`waiting 5 secs for next processing`);
    await sleep(5000);
  }
}

const sleep = async (timeout) => {
  return new Promise((resolve) => {
    try {
      setTimeout(() => {
        resolve();
      }, timeout);
    } catch (err) {
      throw err;
    }
  });
};

run().catch((err) => console.error(err));
