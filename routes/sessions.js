const router = require('express').Router();
let Session = require('../models/session.model');
/**
 * Gets all sessions
 */
router.route('/').get((req, res) => {
    Session.find()
        .then(sessions => res.json(sessions))
        .catch(err => res.status(400).json('Error: ' + err))
});
/**
 * Gets session by a given name
 */
router.route('/name/:name').get((req, res) => {
    Session.find({name: req.params.name})
        .then(sessions => res.json(sessions))
        .catch(err => res.status(400).json('Error: ' + err))
});
/**
 * Gets session by a campaign ID
 */
router.route('/campaign-id/:id').get((req, res) => {
    Session.find({campaignId: req.params.id})
        .then(sessions => res.json(sessions))
        .catch(err => res.status(400).json('Error: ' + err))
});
/**
 * Gets an session by the given ID
 */
router.route('/:id').get((req, res) => {
    Session.findById(req.params.id)
        .then(session => res.json(session))
        .catch(err => res.status(400).json('Error: ' + err))
})
/**
 * Deletes an session by its ID
 */
router.route('/:id').delete((req, res) => {
    Session.findByIdAndDelete(req.params.id)
        .then(() => res.json('session deleted!!!!'))
        .catch(err => res.status(400).json('Error: ' + err))
})
/**
 * Adds new session to the database
 */
router.route('/add').post((req, res) => {
    const session = req.body
    const newSession = new Session(session)
    newSession.save()
        .then(() => res.json('session added'))
        .catch(err => res.status(400).json('Error: ' + err))
})
/**
 * Updates an session by the given ID
 */
router.route('/update/:id').put((req, res) => {
    Session.findById(req.params.id)
        .then(session => {
            session = req.body
            session.save()
                .then(() => res.json('Session Updated'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json("Error: " + err))
})



module.exports = router;