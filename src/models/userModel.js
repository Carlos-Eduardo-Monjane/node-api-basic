'use strict';

var dbConn = require('./../../config/db');

var User = function(user){
    this.name     = user.name;
    this.email          = user.email;
    this.phone          = user.phone;
    this.biography   = user.biography;
    this.address    = user.address;
    this.city         = user.city;
    this.status         = user.status ? user.status : 1;
    this.created_at     = new Date();
    this.updated_at     = new Date();
  };

//   CREATE
  User.create = function (newUser, result) {
    dbConn.query("INSERT INTO users set ?", newUser, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      console.log(res.insertId);
      result(200, res.insertId);
    }
    });
    };

// GET ALL
    User.findAll = function (result) {
        dbConn.query("Select * from users", function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(null, err);
        }
        else{
        console.log('users : ', res);
        result(200, res);
        }
    });
    };

// DELETE
    User.delete = function(id, result){
        dbConn.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(null, err);
        }
        else{
        result(null, res);
        }
    });
    };



    module.exports= User;