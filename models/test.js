module.exports = function(sequelize, DataTypes) {
  var tests = sequelize.define(
    "tests",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: "id"
      },
      courseId: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        field: "course_id"
      },
      num_of_questions: {
        type: DataTypes.INTEGER(10),
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      duration: {
        type: DataTypes.STRING(10),
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
    { tableName: "tests" }
  );

  tests.associate = function(models) {
    models.tests.belongsTo(models.courses, {
      foreignKey: "id",
      as: "test",
      uniqueKey: "test",
      onDelete: 'cascade'
    });
  };

  return tests;
};
