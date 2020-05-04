const mongoose = require('mongoose');

require('../models/user.model');
require('../models/project.model');
mongoose.connect(
    'mongodb://localhost/development',
    {useNewUrlParser: true},
    (error) => {
        if(error) {
            process.exit(1);
        }
        console.log("Database connected successfully");
    });

mongoose.set('debug', true);

module.exports = mongoose;
