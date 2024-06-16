const db = require('./db');

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  db.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE forms (formType VARCHAR(20), name VARCHAR(20), countryCode VARCHAR(20), phoneNumber VARCHAR(20))";
    db.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  })

const createFormEntry = (formType, name, countryCode, phoneNumber, callback) => {
    const query = `INSERT INTO forms (formType, name, countryCode, phoneNumber) VALUES (?,?,?,?)`;
    db.query(query, [formType, name, countryCode, phoneNumber], callback);
};

module.exports = { createFormEntry };
