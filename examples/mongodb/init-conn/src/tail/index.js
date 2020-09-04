const getallBuild = require("./get_all");
const SettingsRepository = require("../../ia/repositories/settings_repository");
const SettingsMongoDBRepository = require("../../fnd/storage/mongodb/repositories/settings_mongodb_repository");

const clientKey = process.env.DB_CLIENTKEY || "client_key";

console.log("use case connection", clientKey);
const settingsRepo = SettingsRepository(new SettingsMongoDBRepository(clientKey));


const getAll = getallBuild({ repository: settingsRepo });

module.exports = {
  getAll,
};
