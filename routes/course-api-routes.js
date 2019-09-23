var db = require("../models");

module.exports = function(app) {
  //route to pull all courses and associated tests
  app.get("/api/courses", function(req, res) {
    db.courses
      .findAll({
        include: [db.tests]
      })
      .then(function(dbCourses) {
        res.json(dbCourses);
        console.log(dbCourses);
      });
  });

  //route to pull courses by id and include associated test
  app.get("/api/courses/:id", function(req, res) {
    db.courses
      .findOne({
        where: {
          id: req.params.id
        },
        include: [db.tests]
      })
      .then(function(dbCourses) {
        res.json(dbCourses);
      });
  });

  //route to create a course
  app.post("/api/courses", function(req, res) {
    db.courses.create(req.body).then(function(dbCourses) {
      res.json(dbCourses);
    });
  });

  //route to delete a course by id
  app.delete("/api/courses/:id", function(req, res) {
    db.courses
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbCourses) {
        res.json(dbCourses);
      });
  });
};
