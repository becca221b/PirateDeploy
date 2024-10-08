const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI;
/*
mongoose.connect("mongodb://localhost/pirates_DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
*/

console.log('MONGODB_URI:', process.env.MONGODB_URI);

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
    console.log('Connected to MongoDB');
})
    .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    if (err.name === 'MongoNetworkError') {
        console.error('Network issue. Please check your internet connection.');
      } else if (err.name === 'MongoParseError') {
        console.error('There is an issue with the URI string.');
      } else if (err.message.includes('Authentication failed')) {
        console.error('Authentication failed. Please check your username and password.');
      } else {
        console.error('Unknown error:', err);
      }
});
      
   
