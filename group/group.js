export default (Sequelize, DataTypes) => {
    const Group = Sequelize.define('Group', {
      groupcode: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      groupnumber: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  
    Group.associate = ({ Subject, Person, Union }) => {
      Group.belongsTo(Subject);
      console.log(Union);
      Group.belongsToMany(Person, { through: Union });
    };
  
    return Group;
}; 
