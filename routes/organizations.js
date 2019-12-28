const router = require('express').Router();
const Organization = require('../models/organization.model');

/**
 * Gets all organizations
 */
router.route('/').get((req, res) => {
    Organization.find()
        .then(orgs => res.json(orgs))
        .catch(err => res.status(400).json('Error: ' + err))
});
/**
 * Gets Locations by a campaign ID
 */
router.route('/campaign-id/:id').get((req, res) => {
    Npc.find({campaignId: req.params.id})
        .then(orgs => res.json(orgs))
        .catch(err => res.status(400).json('Error: ' + err))
});
/**
 * Gets Organization be a given name
 */
router.route('/name/:name').get((req, res) => {
    Organization.find({name: req.params.name})
        .then(orgs => res.json(orgs))
        .catch(err => res.status(400).json('Error: ' + err))
});
/**
 * Gets an Organization by the given ID
 */
router.route('/:id').get((req, res) => {
    Organization.findById(req.params.id)
        .then(org => res.json(org))
        .catch(err => res.status(400).json('Error: ' + err))
})
/**
 * Deletes an Organization by its ID
 */
router.route('/:id').delete((req, res) => {
    Organization.findByIdAndDelete(req.params.id)
        .then(() => res.json('Organization deleted!!!!'))
        .catch(err => res.status(400).json('Error: ' + err))
})
/**
 * Adds new Organization to the database
 */
router.route('/add').post((req, res) => {
    const org = req.body
    const newOrganization = new Organization(org)
    newOrganization.save()
        .then(() => res.json('Organization added'))
        .catch(err => res.status(400).json('Error: ' + err))
})
/**
 * Updates an Organization by the given ID
 */
router.route('/update/:id').put((req, res) => {
    Organization.findById(req.params.id)
        .then(org => {
            org = req.body
            org.save()
                .then(() => res.json('Organization Updated'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json("Error: " + err))
})



module.exports = router;

module.exports = router;