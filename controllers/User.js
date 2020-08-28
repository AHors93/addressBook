const { getUser } = require('../models/User');
const User = require('../models/User');

exports.addUser = function (req, res, next) {
    const { name, email, number } = req.body;

    const newUser = new User({ name, email, number });

    newUser.save((err) => {
        if (err) return next(err);
        else console.log(newUser.name, newUser.email, newUser.number);

        res.status(201).json({
            message: {
                msgBody: "User added successfully",
                msgError: false,
            },
        });
    });
};

exports.index = function (req, res, next) {
    User.find(function (err, users) {
        if (err) return next(err);
        res.json({
            status: "success",
            message: "Details retrieved successfully",
            data: users
        });
    });
};