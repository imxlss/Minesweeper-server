const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/minesweeper', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connection succeeded!'))
  .catch(err => console.log(`MongoDB Connection failed: ${err.message})`));
