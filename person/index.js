export default (sequelize, DataTypes) => {
    const Person = sequelize.define('Person', {
      cedula: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  
    Person.associate = ({ Group, Union }) => {
      console.log(Union);
      Person.belongsToMany(Group, { through: Union });
    };
  
    return Person; 
}; 
