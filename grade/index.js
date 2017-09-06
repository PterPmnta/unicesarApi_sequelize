export default (sequelize, DataTypes) => {
    const Grade = sequelize.define('Grade', {
      first: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      second: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      last: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      retake: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
    });
  
    Grade.associate = ({ Group }) => {
      Grade.belongsTo(Group);
    }; 
  
    return Grade;
  };