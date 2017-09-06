export default (sequelize, DataTypes) => {
    const Union = sequelize.define('Union', {
      unioncode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      };
    });

    return Union;
};
