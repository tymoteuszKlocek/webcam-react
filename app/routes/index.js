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
    var token = req.body.token || req.query.token || req.headers['Auth-Token'];
    if (token) {
        return res.status(401).send({ msg: 'Please login' });
    } else {
        return res.status(200).send();
    }
});

// check if user is logged in and has session
function requireAuth(req, res, next) {
    var token = req.body.token || req.query.token || req.headers.authorisation;
    jwt.verify(token, config.key.privateKey, (error, decoded) => {
        req.decoded = decoded;
        console.log('token decoded', decoded, error)
        console.log(1, req.body.token, 2, req.query.token , 3, req.headers.authorisation)
    });
    next();
    // if(token) {
    //     console.log('req auht ok');
    //     next();
    //     return;
    // } else {
    //     console.log('req auht fail');
    //     res.status(401).send();
    //     return;
    // }

}

module.exports = router;
