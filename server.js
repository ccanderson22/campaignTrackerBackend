const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});


const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established')
})
//TODO: Add an 'Important' boolean to all entities
const npcsRouter = require('./routes/npcs');
const eventsRouter = require('./routes/events');
const locationsRouter = require('./routes/locations');
const notesRouter = require('./routes/notes');
const organizationsRouter = require('./routes/organizations');
const regionsRouter = require('./routes/regions');
const campaignsRouter = require('./routes/campaigns');
// const  = require('./');

app.use('/npcs', npcsRouter);
app.use('/events', eventsRouter);
app.use('/locations', locationsRouter);
app.use('/notes', notesRouter);
app.use('/organizations', organizationsRouter);
app.use('/regions', regionsRouter);
app.use('/campaigns', campaignsRouter);
// app.use('/', );

// app.use((req, res, next) => {
//     const error = new Error('Not found');
//     error.status = 404;
//     next(error);
// })

// app.use((error, req, res, next) => {
//     res.sendStatus(error.status || 500);
//     res.json({
//         error: {
//             message: error.message
//         }
//     });
// });

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
