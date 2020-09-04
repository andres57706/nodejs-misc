const mongodb = require("mongodb");

const status = {
  clients: new Map(),
};

/**
 * @param {string} clientKey
 * @param {string} mongoDBURL
 * */
const addClient = async (clientKey = undefined, mongoDBURL = undefined) => {
  clientkey =
    clientKey === undefined ? new mongodb.ObjectId().toHexString() : clientKey;
  console.log("addClient function", clientKey);
  mongoDBURL =
    mongoDBURL === undefined ? "mongodb://localhost:27017/test" : mongoDBURL;
  const c = await connect(mongoDBURL);
  status.clients.set(clientkey, c);
  console.log(status.clients);
  return clientKey;
};

const connect = async (url) => {
  try {
    const client = await mongodb.MongoClient.connect(url, {
      useUnifiedTopology: true,
    });
    return client;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  availableClients: status.clients,
  addClient,
};
