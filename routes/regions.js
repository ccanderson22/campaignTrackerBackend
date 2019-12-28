const router = require('express').Router();
const Region = require('../models/organization.model');

/**
 * Gets all Regions
 */
router.route('/').get((req, res) => {
    Region.find()
        .then(regions => res.json(regions))
        .catch(err => res.status(400).json('Error: ' + err))
});
/**
 * Gets regions by a campaign ID
 */
router.route('/campaign-id/:id').get((req, res) => {
    Npc.find({campaignId: req.params.id})
        .then(regions => res.json(regions))
        .catch(err => res.status(400).json('Error: ' + err))
});
/**
 * Gets Region be a given name
 */
router.route('/name/:name').get((req, res) => {
    Region.find({name: req.params.name})
        .then(regions => res.json(regions))
        .catch(err => res.status(400).json('Error: ' + err))
});
/**
 * Gets an Region by the given ID
 */
router.route('/:id').get((req, res) => {
    Region.findById(req.params.id)
        .then(region => res.json(region))
        .catch(err => res.status(400).json('Error: ' + err))
})
/**
 * Deletes an Region by its ID
 */
router.route('/:id').delete((req, res) => {
    Region.findByIdAndDelete(req.params.id)
        .then(() => res.json('Region deleted!!!!'))
        .catch(err => res.status(400).json('Error: ' + err))
})
/**
 * Adds new Region to the database
 */
router.route('/add').post((req, res) => {
    const region = req.body
    const newRegion = new Region(region)
    newRegion.save()
        .then(() => res.json('Region added'))
        .catch(err => res.status(400).json('Error: ' + err))
})
/**
 * Updates an Region by the given ID
 */
router.route('/update/:id').put((req, res) => {
    Region.findById(req.params.id)
        .then(region => {
            region = req.body
            region.save()
                .then(() => res.json('Region Updated'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json("Error: " + err))
})



module.exports = router;
