const router = require('express').Router();
const Note = require('../models/note.model')

/**
 * Gets all Notes
 */
router.route('/').get((req, res) => {
    Note.find()
        .then(notes => res.json(notes))
        .catch(err => res.status(400).json('Error: ' + err))
});
/**
 * Gets Notes by a campaign ID
 */
router.route('/campaign-id/:id').get((req, res) => {
    Npc.find({campaignId: req.params.id})
        .then(notes => res.json(notes))
        .catch(err => res.status(400).json('Error: ' + err))
});
/**
 * Gets an Note by the given ID
 */
router.route('/:id').get((req, res) => {
    Note.findById(req.params.id)
        .then(note => res.json(note))
        .catch(err => res.status(400).json('Error: ' + err))
})
/**
 * Deletes an Note by its ID
 */
router.route('/:id').delete((req, res) => {
    Note.findByIdAndDelete(req.params.id)
        .then(() => res.json('Note deleted!!!!'))
        .catch(err => res.status(400).json('Error: ' + err))
})
/**
 * Adds new Note to the database
 */
router.route('/add').post((req, res) => {
    const note = req.body
    const newNote = new Note(note)
    newNote.save()
        .then(() => res.json('Note added'))
        .catch(err => res.status(400).json('Error: ' + err))
})
/**
 * Updates an Note by the given ID
 */
router.route('/update/:id').put((req, res) => {
    Note.findById(req.params.id)
        .then(note => {
            note = req.body
            note.save()
                .then(() => res.json('Note Updated'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json("Error: " + err))
})



module.exports = router;