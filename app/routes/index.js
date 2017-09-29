import express from 'express';
import jwt from 'jsonwebtoken';

import config from '../config/config.json';
// routes
import user from './user';
import webcams from './webcams';
import webcamsCollections from './webcamsCollections';


const router = express.Router();

router.use('/', user);
router.use('/webcamcollections', requireAuth, webcamsCollections);
router.use('/webcams', requireAuth, webcams);
router.use('/webcams/:id', requireAuth, webcams);

// simple browser refresh mechanism
router.post('/refresh', (req, res) => {
    var token = req.body.token || req.query.token || req.headers.authorisation;
    if (token) {
        return res.status(401).send({ msg: 'Please login' });
    } else {
        return res.status(200).send();
    }
});

// check if user is logged in and has session
function requireAuth(req, res, next) {
    var token = req.headers.authorisation;
    console.log('req.headers.authorisation', req.headers['authorisation'], 'lol', JSON.stringify(res.headers))
    jwt.verify(token, config.key.privateKey, (error, decoded) => {
        if (error) {
            res.error = error;
            console.log(error);
            next();
            res.decoded = decoded;
            console.log(decoded)
            //return res.status(401).send(error);
        } else {
            res.decoded = decoded;
            next();
        }
    });
}

module.exports = router;
