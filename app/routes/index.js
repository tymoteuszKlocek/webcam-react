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
    var token = req.body.token || req.query.token || req.headers.authorisation;

    console.log('token in require auth', req.headers.authorisation);
   
    jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksInVzZXJuYW1lIjoidXNlciIsInBhc3N3b3JkIjoiMWExZGM5MWM5MDczMjVjNjkyNzFkZGYwYzk0NGJjNzIiLCJlbWFpbCI6IndlckB3ZXIucGwiLCJ3ZWJjYW1zY29sbGVjdGlvbnNJZCI6bnVsbCwiY3JlYXRlZEF0IjoiMjAxNy0wOS0wOVQwOToxNzo0Ni4wMDBaIiwidXBkYXRlZEF0IjoiMjAxNy0wOS0wOVQwOToxNzo0Ni4wMDBaIiwiaWF0IjoxNTA2Njg5NTY5LCJleHAiOjE1MDY3MDM5Njl9.ZUBWYC1qEdrNhwjmHGRnj6frOBGDh3Dl5y6HMpa0g3c', config.key.privateKey, (error, decoded) => {
        if (error) {
            res.error = error;
            console.log(error);
            return res.status(401).send(error);
        } else {
            req.decoded = decoded;
            next();
        }
    });
}

module.exports = router;
