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
    let token = req.body.token || req.query.token || req.headers.authorisation;
    if (!token) {
        return res.status(401).send({ msg: 'Please login' });
    } else {
        return res.status(200).send();
    }
});

// check if user is logged in and has session
function requireAuth(req, res, next) {

    let token = req.body.token || req.query.token || req.headers.authorisation;
    console.log('token in require auth', req.headers.authorisation);

    // WTF? When token = req.headers.authorisation -> jwt.verify doesn't work
    // it shows req.headers.authorisation is undefined
    // but when I put hardocoded string below instead of token then req.headers.authorisation is ok

    // var decoded = jwt.decode(token, {complete: true});
    // console.log(decoded.header);
    // console.log(decoded.payload)
    jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksInVzZXJuYW1lIjoidXNlciIsInBhc3N3b3JkIjoiMWExZGM5MWM5MDczMjVjNjkyNzFkZGYwYzk0NGJjNzIiLCJlbWFpbCI6IndlckB3ZXIucGwiLCJ3ZWJjYW1zY29sbGVjdGlvbnNJZCI6bnVsbCwiY3JlYXRlZEF0IjoiMjAxNy0wOS0wOVQwOToxNzo0Ni4wMDBaIiwidXBkYXRlZEF0IjoiMjAxNy0wOS0wOVQwOToxNzo0Ni4wMDBaIiwiaWF0IjoxNTA3MTAwNDYyLCJleHAiOjE1MDcxMTQ4NjJ9.VBeCYhmNhy6SfU_HIIor6hbKCRy-oyOsAPwbsIK0MdU', 'totalSecret', { ignoreExpiration: true }, (error, decoded) => {

        //console.log('token is readable whent I paste hardcode - why?', req.headers)
        if (error) {
            res.error = error;
            console.log('error in verification', error);
            return res.status(401).send(error);
        } else {
            req.decoded = decoded;
            //console.log('decoded done')
            next();
        }
    });



    // jwt.verify(req.headers.authorisation, config.key.privateKey, (error, decoded) => {

    //     console.log('token is readable whent I paste hardcode - why?', req.headers.authorisation)
    //     if (error) {
    //         res.error = error;
    //         console.log('error in verification', error);
    //         return res.status(401).send(error);
    //     } else {
    //         req.decoded = decoded;
    //         next();
    //     }
    // });
}

module.exports = router;
