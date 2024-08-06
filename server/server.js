const port = process.env.PORT || 8000
const express = require('express');
const cors = require('cors')
const app = express();


const dbURI = process.env.MONGODB_URI;
console.log('MONGODB_URI:', process.env.MONGODB_URI);

const createAdminAccount = require('./scripts/admin');

require('./config/mongoose.config')
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

createAdminAccount();

require('./routes/pirates.routes')(app);
require('./routes/user.router')(app)

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
});
