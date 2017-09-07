export default (sequelize, DataTypes) => {
    const Intercepto = sequelize.define('Intercepto', {
      unioncode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      };
    });

    return Intercepto;
};
