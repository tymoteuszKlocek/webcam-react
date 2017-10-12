import express from 'express';
import models from '../models';

const router = express.Router();

/* GET user collections. */
router.get('/', (req, res) => {

    models.WebcamsCollections.findAll({
        where: {
            UserId: req.decoded.id
        }
    }).then(collections => {
        res.status(200).send(collections);
    }).catch((error) => {
        console.log(error);
    });

});

/* CREATE user collection */
router.put('/', (req, res) => {
    const request = req.body;

    models.WebcamsCollections.findOrCreate({
        where: {
            title: request.name,
            UserId: req.decoded.id
        }
    }).then(() => {
        return res.status(200).send({ success: true, msg: 'New collection created or it already exists.' });
    }).catch(error => {
        return res.status(200).send({ success: false, msg: error });
    });
});

/* DELETE user collection */
router.delete('/', (req, res) => {

    models.WebcamsCollections.findOne({
        where: {
            UserId: req.decoded.id,
            id: req.query.id
        }
    }).then(collection => {
        collection.destroy();
        return res.status(200).send({ success: true, msg: 'Gallery destroyed' });
    }).catch((error) => {
        res.status(200).send(error);
    });

});

module.exports = router;