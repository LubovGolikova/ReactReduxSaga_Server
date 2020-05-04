const User = require('../models/user.model');

//receive all users
module.exports.getALLUsers = (req,res,next) => {
    User.find({}).then(users => {
          res.send(users);
         })
        .catch(err => next(err));
};

//create user
module.exports.createUser = (req, res, next) => {
    const data = req.body;
    const user = new User(data);
    user.save()
        .then((savedUser) => res.json(savedUser))
        .catch(err => next(err));
};

//find user by id
module.exports.findById = (req, res, next) => {
    User.findById(req.params.id)
        .select('-__v')
        .then((savedUser) => res.json(savedUser))
        .catch(err => next(err))
};

//update user by id
module.exports.updateUser = (req, res, next) => {
    const uid={"_id": req.params.id};
    const options ={new: true};
    const userForUpdate = req.body;
    User.findOneAndUpdate(uid, userForUpdate, options)
        .then((user) => {
            if(!user) {
                throw new Error("No such user");
            }
            res.json(user);
        })
        .catch(err => next(err))
};

//delete user by id
module.exports.deleteUserById = (req, res, next) => {
    const uid={"_id": req.params.id};
    User.findByIdAndRemove(uid)
        .then(deletedUser => {
            if(!deletedUser) throw new Error("User not found");
            res.send("User was deleted");
        })
        .catch(err => next(err));
};


