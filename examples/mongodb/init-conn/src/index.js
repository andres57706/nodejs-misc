// primero debemnos conectarnos a la base datos
const initDB = async () => {
  try {
    const clientKey = process.env.DB_CLIENTKEY || "client_key";
    const { addClient } = require("./fnd/storage/mongodb/client");
    const key = await addClient(clientKey, "mongodb://mongo:27017");
    console.log("DB client key generated: ", key);
  } catch (err) {
    throw err;
  }
};

// ejecutar nuestro caso de uso
const main = async () => {
  try {
    await initDB();

    const tailUsecases = require("./domain/tail");
    const tails = await tailUsecases.getAll();
    console.log(`
    
    
    
    
    RESULTADO DE LA VRGGGG
    
    tails:${JSON.stringify(tails)}
    
    
    `);

    process.exit(0);
  } catch (err) {
    throw err;
  }
};

main();
