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
  
    Group.associate = ({ Subject, Person, Intercepto }) => {
      Group.belongsTo(Subject);
      console.log(Intercepto);
      Group.belongsToMany(Person, { through: Intercepto });
    };
  
    return Group;
}; 
