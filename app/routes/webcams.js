import express from 'express';
import models from '../models';

const router = express.Router();

router.get('/:id', (req, res) => {
    console.log(req.params, 'lololo')
    models.Webcams.findAll({
        where: {
            userID: req.decoded.id,
            $and: [
                { collectionID: req.params.id }
            ]
        }
    }).then(collection => {
        console.log('collection', )
        res.status(200).send(collection);
    }).catch((error) => {
        res.status(200).send({ error: error });
    });

});

router.put('/', (req, res) => {

    const request = JSON.parse(JSON.stringify(req.body.body))
    console.log('request.collectionID', request.collectionID)
    models.Webcams.find({
        where: {
            webcamID: request.webcam.webcamID,
            $and: [
                { collectionID: request.collectionID },
                { userID: req.decoded.id }
            ]
        }
        
    }).then(webcam => {
 
        if (webcam) {
            res.status(200).send({ success: false, error: 'Webcam already saved in this collection.' });
        } else {

            models.Webcams.create({
                city: request.webcam.city,
                country: request.webcam.country,
                countryCode: request.webcam.countryCode,
                views: request.webcam.views,
                lat: request.webcam.lat,
                lng: request.webcam.lng,
                position: request.webcam.position,
                thumbnail: request.webcam.thumbnail,
                type: request.webcam.type,
                title: request.webcam.title,
                link: request.webcam.link,
                webcamID: request.webcam.webcamID,
                collectionID: request.collectionID,
                userID: req.decoded.id
            })
                .then(() => {
                    res.status(200).send({ success: true, msg: 'New webcam saved.' });
                });
        }
    }).catch(error => {
        console.log('error', error)
        res.status(200).send({ success: false, error: error });
    });
});

router.post('/delete/', (req, res) => {
    const webcam = req.body.params
    models.Webcams.findOne({
        where: {
            collectionID: webcam.collectionID,
            webcamID: webcam.webcamID
        }
    }).then(webcam => {

        webcam.destroy().then(() => {
            res.status(200).send({ success: true, msg: 'Webcam deleted!' });
        });

    }).catch((error) => {
        console.log('error', error)
        res.status(200).send({ success: false, error: error });
    });
});

module.exports = router;