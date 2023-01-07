const sqlite = require('sqlite');
const axios = require('axios');

(async () => {
  // Open database
  const db = await sqlite.open('./database.sqlite', { Promise });

  // Create Student table
  await db.run('CREATE TABLE IF NOT EXISTS Student (id INTEGER PRIMARY KEY, name TEXT, dob TEXT)');

  // Insert records
  await db.run('INSERT INTO Student (id, name, dob) VALUES (?, ?, ?)', [1, 'John', '01/01/1999']);
  await db.run('INSERT INTO Student (id, name, dob) VALUES (?, ?, ?)', [2, 'Jane', '01/01/1998']);

  // Select all records
  const students = await db.all('SELECT * FROM Student');
  console.log(students);

  // Close database
  await db.close();
})();
