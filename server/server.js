const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const ConnectDB = require('./mongoose/database');
const NotFound = require('./utils/notFound');
const morgan = require('morgan');

//app
const app = express();
ConnectDB();

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json({ extended: false }));
app.use(cors());

//routes
fs.readdirSync('./routes').map((route) =>
  app.use('/api', require('./routes/' + route))
);

//error route
app.use(NotFound);

const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(`Server started at ${process.env.NODE_ENV} at Port: ${PORT}`)
);

//Handle unHandle Rejection
process.on('unHandledRejection', (error) => {
  console.log(`Error: ${error.message}`);
  server.close(() => process.exit(1));
});
