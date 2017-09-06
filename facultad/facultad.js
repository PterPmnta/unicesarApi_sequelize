export default (Sequelize, DataTypes) => {
    Sequelize.define('Facultad', {
        codigofacultad: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        nombrefacultad: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};