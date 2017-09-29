import express from 'express';
import md5 from 'md5';
import jwt from 'jsonwebtoken';
import models from '../models';
import config from '../config/config.json';

const router = express.Router();

// register
router.post('/register', (req, res) => {

    let schema = {
        'email': {
            notEmpty: true,
            isEmail: {
                errorMessage: 'Invalid Email'
            }
        },
        'username': {
            notEmpty: true,
            isLength: {
                options: [{ min: 2, max: 18 }],
                errorMessage: 'Username must be between 2 and 18 chars long'
            },
            errorMessage: 'Invalid Username'
        },
        'password': {
            notEmpty: true,
            isLength: {
                options: [{ min: 4 }],
                errorMessage: 'Password must be longer then 4 chars'
            },
            errorMessage: 'Invalid Password'
        },
    };

    models.User.findOne({
        where: {
            username: req.body.username
        }
    }).then((user) => {

        if (user) {

            res.status(200).send({ success: false, error: 'Username is already used.' });
            return;

        } else {

            req.checkBody(schema);
            req.check('password', 'Password not confirmed - repeat the same password!').equals(req.body.confirmPassword);
            req.getValidationResult().then((result) => {

                try {
                    result.throw();

                    let hashPass = md5(req.body.password);
                  
                    models.User.create({
                        username: req.body.username,
                        password: hashPass,
                        email: req.body.email
                    }).then(() => {
                        res.status(200).send({ success: true });
                    }).catch((error) => {
                        res.status(200).send({ success: false, error: error });
                    });

                } catch (error) {
                    req.session.error = error.array();
                    res.status(200).send({ success: false, error: req.session.error });
                    req.session.error = null;
                }

            });
        }
    });

});

//login
router.post('/login', (req, res) => {
    console.log(req.body, 'login', req.headers);

    let schema = {
        'username': {
            notEmpty: true,
            errorMessage: 'Invalid Username'
        },
        'password': {
            notEmpty: true,
            errorMessage: 'Invalid Password'
        },
    };

    models.User.findOne({ where: { username: req.body.username }, raw: true }).then(user => {

        let hashPass = md5(req.body.password);
         
        if (!user) {

            return res.status(200).send({ success: false, error: 'User not found. Create account.' });

        } else if (hashPass === user.password) {

            let tokenData = jwt.sign(user, config.key.privateKey, { expiresIn: 14400 });

            let jwtResult = {
                token: tokenData
            };

            req.checkBody(schema);
            req.getValidationResult().then((result) => {
                try {
                    result.throw();
                    console.log('result with token!!!', jwtResult);
                    return res.json(jwtResult);
                } catch (error) {
                    res.status(200).send({ success: false, error: 'Invalid username or password' });
                }
            }).catch(() => {
                res.status(200).send({ success: false, error: 'Invalid username' });
            });
        } else {
            res.status(200).send({ success: false, error: 'Invalid password' });
        }
    });

});

// logout
router.post('/logout', (req, res) => {
    res.status(200).send();
});


module.exports = router;