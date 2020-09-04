const usecaseBuild = ({ repository }) => {
  return async () => {
    try {
      return await repository.getAll();
    } catch (err) {
      throw err;
    }
  };
};

module.exports = usecaseBuild;
