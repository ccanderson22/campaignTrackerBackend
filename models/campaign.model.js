const mongoose = require('mongoose');

const Schema = mongoose.Schema;
/**
 * 
 */
const campaignSchema = new Schema({
    name: {type: String, required: true, unique: true, default: 'Default'},
    // events: {type: [Object], required: true, default: []},
    // regions: {type: [Object], required: true, default: []},
    // locations: {type: [Object], required: true, default: []},
    // notes: {type: [Object], required: true, default: []},
    // npcs: {type: [Object], required: true, default: []},
    // organizations: {type: [Object], required: true, default: []},
    // sessions: {type: [Object], required: true, default: []},
    // playerChars: {type: [Object], required: true, default: []},
    // calendar: {type: Object, required: true, default: {}},
    // monsterBlocks: {type: [Object], required: true, default: []},
    // items: {type: [Object], required: true, default: []},
    // adventures: {type: [Object], required: true, default: []},
    // arcs: {type: [Object], required: true, default: []},
})

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;


