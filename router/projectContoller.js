const Project = require('../models/project.model');

// //create Project by user
module.exports.createProject = (req,res,next) => {
    const projectbody = req.body.name;
    const newProject = new Project({
        name: projectbody,
        developer: req.params._id
    });
    console.log(newProject);
    newProject
        .save()
        .then((savedProject) => res.json(savedProject))
        .catch(err => next(err));
};
module.exports.getALLProject = (req,res,next) => {
    Project.find({}).then(projects => {
        res.send(projects);
    })
        .catch(err => next(err));
};
