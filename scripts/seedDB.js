var db = require("../models");

//test data to seed db at start of app/server
db.sequelize.query(
  "INSERT INTO `ess`.`Courses` (`name`, `domain`, `description`) VALUES ('Eco1', 'Eco.com', 'Test data for ecotest')"
);
db.sequelize.query(
  "INSERT INTO `ess`.`Courses` (`name`, `domain`, `description`) VALUES ('Math1', 'Math.com', 'Test data for mathtest')"
);

db.sequelize.query(
  "INSERT INTO `ess`.`Tests` (`course_id`, `num_of_questions`, `name`, `duration`) VALUES ('1', '15', 'Eco', '10')"
);
db.sequelize.query(
  "INSERT INTO `ess`.`Tests` (`course_id`, `num_of_questions`, `name`, `duration`) VALUES ('2', '65', 'Math', '50')"
);
