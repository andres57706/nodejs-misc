const { availableClients } = require("../client");
const SETTINGS_MONGODB_COLLECTION =
  process.env.SETTINGS_MONGODB_COLLECTION || "settings";

class SettingsMongoDBRepository {
  /**
   *
   * @param {string} clientkey
   */
  constructor(clientkey) {
    console.log(availableClients);
    if (availableClients.get(clientkey) === undefined) {
      throw new Error("No HAY CLIEWHNRFlkjsdfhgl");
    }
    this.client = availableClients.get(clientkey);
    this.col = this.client.db().collection(SETTINGS_MONGODB_COLLECTION);
  }

  async getAll() {
    const c = this.col.find({});
    return await c.toArray();
  }
}

module.exports = SettingsMongoDBRepository;
