export default (sequelize, DataTypes) => {
    const Schedule = sequelize.define('Schedule', {
        place: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        day: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hour: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Schedule.associate = ({ Group }) => {
        Schedule.belongsTo(Group);
    };

    return Schedule;

};