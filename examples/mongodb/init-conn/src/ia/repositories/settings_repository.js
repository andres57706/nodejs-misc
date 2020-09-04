/**
 *
 * @param {*} implementation
 */
const SettingsRepository = (implementation) => {
  const getAll = async () => {
    return implementation.getAll();
  };

  return {
    getAll,
  };
};

module.exports = SettingsRepository;
