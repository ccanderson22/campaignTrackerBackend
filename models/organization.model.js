const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const organizationSchema = new Schema({
    campaignId: {type: String, required: true, default: 'TBD'},
    name: {type: String, required: true},
    leader: {type: String, required: true},
    goals: {type: [String], required: true},
    morals: {type: [String], required: true},
    members: {type: [String], required: true},
    rivals: {type: [String], required: true},
    allies: {type: [String], required:true}, 
    locations: {type: [String], required: true},
})

/**
 * Things to possibly add
 *      Ranks
 *      Events/Encounters
 *      Flaws
 *      Secrets
 *      Responsibilities 
 */
 const Organization = mongoose.model('Organization', organizationSchema);

 module.exports = Organization;