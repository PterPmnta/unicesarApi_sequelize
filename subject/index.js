export default (Sequelize, DataTypes) => {
    const Subject = Sequelize.define('Subject', {
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      credits: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
  
    Subject.associate = ({ Program }) => {
      Subject.belongsTo(Program);
    };
  
    return Subject;
};