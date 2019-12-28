const router = require('express').Router();
let Campaign = require('../models/campaign.model');

/**
 * Gets all Campaigns
 */
router.route('/').get((req, res) => {
    Campaign.find()
        .then(campaigns => res.json(campaigns))
        .catch(err => res.status(400).json('Error: ' + err))
});
/**
 * Gets Campaign be a given name
 */
router.route('/name/:name').get((req, res) => {
    Campaign.find({name: req.params.name})
        .then(campaigns => res.json(campaigns))
        .catch(err => res.status(400).json('Error: ' + err))
});
/**
 * Gets an Campaign by the given ID
 */
router.route('/:id').get((req, res) => {
    Campaign.findById(req.params.id)
        .then(campaign => res.json(campaign))
        .catch(err => res.status(400).json('Error: ' + err))
})
/**
 * Deletes an Campaign by its ID
 */
router.route('/:id').delete((req, res) => {
    Campaign.findByIdAndDelete(req.params.id)
        .then(() => res.json('Campaign deleted!!!!'))
        .catch(err => res.status(400).json('Error: ' + err))
})
/**
 * Adds new Campaign to the database
 */
router.route('/add').post((req, res) => {
    const campaign = req.body
    const newCampaign = new Campaign(campaign)
    newCampaign.save()
        .then(() => res.json('Campaign added'))
        .catch(err => res.status(400).json('Error: ' + err))
})
/**
 * Updates an Campaign by the given ID
 */
router.route('/update/:id/').put((req, res) => {
    Campaign.findById(req.params.id)
        .then(campaign => {
            campaign = req.body
            campaign.save()
                .then(() => res.json('Campaign Updated'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json("Error: " + err))
})



module.exports = router;