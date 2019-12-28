const router = require('express').Router();
let Npc = require('../models/npc.model');
/**
 * Gets all NPCs
 */
router.route('/').get((req, res) => {
    Npc.find()
        .then(npcs => res.json(npcs))
        .catch(err => res.status(400).json('Error: ' + err))
});
/**
 * Gets NPC be a given name
 */
router.route('/name/:name').get((req, res) => {
    Npc.find({name: req.params.name})
        .then(npcs => res.json(npcs))
        .catch(err => res.status(400).json('Error: ' + err))
});
/**
 * Gets NPC by a campaign ID
 */
router.route('/campaign-id/:id').get((req, res) => {
    Npc.find({campaignId: req.params.id})
        .then(npcs => res.json(npcs))
        .catch(err => res.status(400).json('Error: ' + err))
});
/**
 * Gets an NPC by the given ID
 */
router.route('/:id').get((req, res) => {
    Npc.findById(req.params.id)
        .then(npc => res.json(npc))
        .catch(err => res.status(400).json('Error: ' + err))
})
/**
 * Deletes an NPC by its ID
 */
router.route('/:id').delete((req, res) => {
    Npc.findByIdAndDelete(req.params.id)
        .then(() => res.json('NPC deleted!!!!'))
        .catch(err => res.status(400).json('Error: ' + err))
})
/**
 * Adds new NPC to the database
 */
router.route('/add').post((req, res) => {
    const npc = req.body
    const newNpc = new Npc(npc)
    newNpc.save()
        .then(() => res.json('NPC added'))
        .catch(err => res.status(400).json('Error: ' + err))
})
/**
 * Updates an NPC by the given ID
 */
router.route('/update/:id').put((req, res) => {
    Npc.findById(req.params.id)
        .then(npc => {
            npc = req.body
            npc.save()
                .then(() => res.json('Npc Updated'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json("Error: " + err))
})



module.exports = router;