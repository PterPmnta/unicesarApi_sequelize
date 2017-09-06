export default (Sequelize, DataTypes) => (
    Sequelize.define('Role', {
        autoid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },    
        tipo: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
);