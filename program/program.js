export default (Sequelize, DataTypes) => {
    const Program = Sequelize.define('Program', {
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

    Program.associate = ({ Facultad }) => {
        Program.belongsTo(Facultad);
    };

    return Program;
};