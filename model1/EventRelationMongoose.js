const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test')
    .then(() => console.log('Connected!'));

const eventImagesSchema = new mongoose.Schema({
    image: String,
    event_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
})


const eventSchema = new mongoose.Schema({
    image: String,
    title: String,
})




const Eventimages = new mongoose.model("Eventimages", eventImagesSchema);

const Event = new mongoose.model("Event", eventSchema);

module.exports={Eventimages,Event}