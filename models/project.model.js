const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema ({
        pid: mongoose.Schema.Types.ObjectId,
        active: {
            type: Boolean,
        },
        name: {
            type: String,
            default: false
        },
        developer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        task:
        [{
            type: String
        }]

    });

const Project = mongoose.model('Project',ProjectSchema);
module.exports = Project;