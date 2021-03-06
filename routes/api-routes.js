// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // GET route for getting all of the todos
    app.get("/api/dogs", function (req, res) {
        // findAll returns all entries for a table when used with no options
        db.Dog.findAll({}).then(function (puppy_parlor_db) {
            // We have access to the todos as an argument inside of the callback function
            res.json(puppy_parlor_db);
        });
    });

    // POST route for saving a new todo
    app.post("/api/dogs", function (req, res) {
        console.log(req.body);
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        db.Dog.create({
            name: req.body.dog_name,
            size: req.body.dog_size,
            breed: req.body.dog_name,
            vaccinated: req.body.dog_vaccinated,
        }).then(function (puppy_parlor_db) {
            // We have access to the new todo as an argument inside of the callback function
            res.json(puppy_parlor_db);
        });
    });

    // PUT route for updating todos. We can get the updated todo from req.body
    app.put("/api/dogs", function (req, res) {

    });
};



