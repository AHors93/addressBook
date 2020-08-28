const apiRouter = require("express").Router();
const { addUser, index } = require('../controllers/user');
const app = require("../server");


// apiRouter.route("/index", () => {
//     res.send()
// });

apiRouter.route('/address').post(addUser);

apiRouter.route('/users').get(index);

module.exports = apiRouter;

