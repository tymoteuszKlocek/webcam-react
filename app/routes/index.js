import express from 'express';

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
    if (!req.session.user) {
        return res.status(401).send({ msg: 'Please login' });
    } else {
        return res.status(200).send({ success: true, username: req.session.user.username });
    }
});

// check if user is logged in and has session
function requireAuth(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['Auth-Token'];
    if(token) {
        console.log('req auht', token);
        next();
    } else {
        console.log('req auht', token);
        res.status(401).send();
        return;
    }

}

module.exports = router;
