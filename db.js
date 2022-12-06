const mongoose = require('mongoose');

const dbStart = async (dbUrl) => {
  try {
    await mongoose.connect(dbUrl);
    console.log('Database connection... ok.');
  } catch (error) {
    console.log({ 'Database connection... error': error });
    process.exit(1);
  }
};

module.exports = { dbStart };