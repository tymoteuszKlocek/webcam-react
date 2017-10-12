import express from 'express';
import jwt from 'jsonwebtoken';
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

// check if user is logged in and has token
function requireAuth(req, res, next) {

    let token = req.headers.authorisation || req.body.token || req.query.token;

    if (req.method === 'OPTIONS') {
        return res.status(200).send();
    }
    // verification of token, expiration data is set to: ignore
    jwt.verify(token, 'totalSecret', { ignoreExpiration: true }, (error, decoded) => {

        if (error) {
            res.error = error;
            return res.status(401).send(error);
        }

        req.decoded = decoded;
        next();
    });
}

module.exports = router;
