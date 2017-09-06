export default (Sequelize, DataTypes) => {
    const User = Sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            unique: true
        },    
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    User.associate = ({ Role, Person }) => {
        User.belongsTo(Role);
        User.belongsTo(Person);
    };

    User.hook('beforeCreate', (instance, opts) => {
        instance.password = hash(instance.password);
    });

    return User;
};