const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    campaignId: {type: String, required: true},
    name: {type: String, required: true},
    details: {type: [String], required: true},
    locationsVisited: {type: [String], required, default: 'None'},
    npcInteractions: {type: [String], required: true, default: 'None'},
    gameDate: {type: [String], required: true, default: 'TBD'},
    arc: {type: String, required: true, default: 'TBD'}
},{
    timestamps: true
})
/**
 * TODO: This need more stuff but i cant think of what
 */

const Session = mongoose.model('Session', Session)