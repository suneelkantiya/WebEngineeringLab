const sqlite = require('sqlite');

(async () => {
  // Open database
  const db = await sqlite.open('./database.sqlite', { Promise });

  // Create University table
  await db.run('CREATE TABLE IF NOT EXISTS University (id INTEGER PRIMARY KEY, name TEXT, image BLOB)');

  // Create University instances
  const university1 = new University('SSUET');
  const university2 = new University('MIT');

  // Set images for University instances
  await university1.setImage();
  await university2.setImage();

  // Insert University instances
  await db.run('INSERT INTO University (name, image) VALUES (?, ?)', [university1.name, university1.image]);
  await db.run('INSERT INTO University (name, image) VALUES (?, ?)', [university2.name, university2.image]);

  // Close database
  await db.close();
})();
