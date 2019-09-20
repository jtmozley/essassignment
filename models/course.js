module.exports = function(sequelize, DataTypes) {
  var Course = sequelize.define("Course", {
    name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true,
      field: "name"
    },
    domain: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: "domain"
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: "description"
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
  });

  Course.associate = function(models) {
    models.Course.hasMany(models.Test, {
      onDelete: "cascade"
    });
  };

  return Course;
};
