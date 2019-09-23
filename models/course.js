module.exports = function(sequelize, DataTypes) {
  var courses = sequelize.define(
    "courses",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: "id"
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: true,
        unique: true
      },
      domain: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      description: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal("NOW()")
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal("NOW()")
      }
    },
    { tableName: "courses" }
  );

  courses.associate = function(models) {
    models.courses.hasOne(models.tests, {
      onDelete: "cascade"
    });
  };

  return courses;
};
