module.exports = function(sequelize, DataTypes) {
  var Test = sequelize.define("Test", {
    courseId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      field: "course_id"
    },
    numOfQuestions: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      field: "num_of_questions"
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: "name"
    },
    duration: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: "duration"
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

  Test.associate = function(models) {
    models.Test.belongsTo(models.Course, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Test;
};
