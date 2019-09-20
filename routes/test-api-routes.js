var db = require("../models");

module.exports = function(app) {

  //route to pull all tests and associated courses
  app.get("/api/tests", function(req, res) {
    var query = {};

    if (req.query.course_id) {
      query.Courseid = req.query.course_id;
    }
    db.Test.findAll({
      where: query,
      include: [db.Course]
    }).then(function(dbTest) {
      res.json(dbTest);
    });
  });

//route to pull tests by id and include associated courses
  app.get("/api/tests/:id", function(req, res) {
    db.Test.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Course]
    }).then(function(dbTest) {
      res.json(dbTest);
    });
  });

//route to create a test
  app.post("/api/tests", function(req, res) {
    db.Test.create(req.body).then(function(dbTest) {
      res.json(dbTest);
    });
  });

//route to delete a test by id
  app.delete("/api/tests/:id", function(req, res) {
    db.Test.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTest) {
      res.json(dbTest);
    });
  });

  //route for updating tests
  app.put("/api/tests", function(req, res) {
    db.Test.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbTest) {
      res.json(dbTest);
    });
  });
};
