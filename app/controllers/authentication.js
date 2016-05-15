var passport = require('passport');
var mongoose = require('mongoose');

var User = mongoose.model('User');

module.exports.register = function(req, res) {
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;

    user.setPassword(req.body.password);

    User.create(user,function(err, user) {
        if (err) {
            console.log(err);
            return send('');
        }
        var token;
        token = user.generateJwt();
        res.status(200);
        return res.send(token);
    });
};

module.exports.login = function(req, res) {

    passport.authenticate('local', function(err, user, info){
        var token;

        // If Passport throws/catches an error
        if (err) {
            res.status(404).json(err);
            return;
        }

        // If a user is found
        if(user){
            token = user.generateJwt();
            res.status(200);
            return res.send(token);
        } else {
            // If user is not found
            res.status(401).json(info);
        }
    })(req, res);

};
