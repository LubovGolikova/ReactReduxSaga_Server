const express = require('express');
const router = require('./router');
const errorHandler = require('./utils/errorHandler');
const cors = require('cors');
require('./db/mongoose');

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(3003,
    () => console.log("Server is running on port 3003")
);