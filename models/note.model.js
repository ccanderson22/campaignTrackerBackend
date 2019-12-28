const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    campaignId: {type: [String], required: true, default: 'TBD'},
    title: {type: String, required: true, default: 'Blahhhhhhh'},
    note: {type: [String], required: true},
    reference: {
        type: {type: String, required: true},
        id: {type: String, required: true}
    }
})

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;