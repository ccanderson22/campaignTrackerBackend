const router = require('express').Router();
const Location = require('../models/location.model')

/**
 * Gets All Locations 
 */
router.route('/').get((req, res) => {
    Location.find()
        .then(locations => res.json(locations))
        .catch(err => res.status(400).json('Error: ' + err))
});
/**
 * Gets Location be a given name
 */
router.route('/name/:name').get((req, res) => {
    Location.find({name: req.params.name})
        .then(locations => res.json(locations))
        .catch(err => res.status(400).json('Error: ' + err))
});
/**
 * Gets Locations by a campaign ID
 */
router.route('/campaign-id/:id').get((req, res) => {
    Npc.find({campaignId: req.params.id})
        .then(locations => res.json(locations))
        .catch(err => res.status(400).json('Error: ' + err))
});
/**
 * Gets an Location by the given ID
 */
router.route('/:id').get((req, res) => {
    Location.findById(req.params.id)
        .then(location => res.json(location))
        .catch(err => res.status(400).json('Error: ' + err))
})
/**
 * Deletes an Location by its ID
 */
router.route('/:id').delete((req, res) => {
    Location.findByIdAndDelete(req.params.id)
        .then(() => res.json('Location deleted!!!!'))
        .catch(err => res.status(400).json('Error: ' + err))
})
/**
 * Adds new Location to the database
 */
router.route('/add').post((req, res) => {
    const location = req.body
    const newLocation = new Location(location)
    newLocation.save()
        .then(() => res.json('Location added'))
        .catch(err => res.status(400).json('Error: ' + err))
})
/**
 * Updates an Location by the given ID
 */
router.route('/update/:id').put((req, res) => {
    Location.findById(req.params.id)
        .then(location => {
            location = req.body
            location.save()
                .then(() => res.json('Location Updated'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json("Error: " + err))
})



module.exports = router;