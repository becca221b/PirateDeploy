const port = process.env.PORT || 8000
const express = require('express');
const cors = require('cors')
const app = express();

const createAdminAccount = require('./scripts/admin');

require('./config/mongoose.config')
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

createAdminAccount();

require('./routes/pirates.routes')(app);
require('./routes/user.router')(app)



app.listen(port, () => {
    console.log(`Listening at port ${port}`)
});
