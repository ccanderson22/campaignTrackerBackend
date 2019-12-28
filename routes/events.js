const router = require('express').Router();
const Event = require('../models/event.model')

/**
 * Gets all events
 */
router.route('/').get((req, res) => {
    Event.find()
        .then(events => res.json(events))
        .catch(err => res.status(400).json('Error: ' + err))
});
/**
 * Gets an Event by the given ID
 */
router.route('/:id').get((req, res) => {
    Event.findById(req.params.id)
        .then(event => res.json(event))
        .catch(err => res.status(400).json('Error: ' + err))
})
/**
 * Gets Event be a campaign ID
 */
router.route('/campaign-id/:id').get((req, res) => {
    Npc.find({campaignId: req.params.id})
        .then(events => res.json(events))
        .catch(err => res.status(400).json('Error: ' + err))
});
/**
 * Deletes an Event by its ID
 */
router.route('/:id').delete((req, res) => {
    Event.findByIdAndDelete(req.params.id)
        .then(() => res.json('Event deleted!!!!'))
        .catch(err => res.status(400).json('Error: ' + err))
})
/**
 * Adds new Event to the database
 */
router.route('/add').post((req, res) => {
    const event = req.body
    console.log(event)
    const newEvent = new Event(event)
    newEvent.save()
        .then(() => res.json('Event added'))
        .catch(err => res.status(400).json('Error: ' + err))
})
/**
 * Updates an Event by the given ID
 */
router.route('/update/:id').put((req, res) => {
    Event.findById(req.params.id)
        .then(event => {
            event = req.body
            event.save()
                .then(() => res.json('Event Updated'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json("Error: " + err))
})



module.exports = router;