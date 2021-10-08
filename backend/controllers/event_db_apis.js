const mongoose = require("mongoose");
const Event = require("../models/events");
//------------------------------------------------END OF IMPORTS----------------------------//
// This Route must be protected
// Auth pending

//-----------------------------------------------EVENT DATABASE APIs--------------------------//
exports.insert_event = async (req, res) => {
  try {
    const temp_data = req.body;
    const event = new Event({
      imageSrc: req.file.filename,
      author: temp_data.author,
      category: temp_data.category,
      title: temp_data.title,
      subtitle: temp_data.subtitle,
      description: temp_data.description,
      url: temp_data.url,
      date_start: new Date(temp_data.date_start).getTime(),
      date_end: new Date(temp_data.date_end).getTime(),
    });
    await event.save();
  } catch (err) {
    throw new Error(err);
  }
};

// API for ongoing events
exports.read_ongoing_events = async (req, res) => {
  try {
    const data = await Event.find({
      $and: [
        { date_start: { $lte: Date.now() } },
        { date_end: { $gte: Date.now() } },
      ],
    });
    return data;
  } catch (err) {
    console.log(data);
  }
};

// API for upcomming events
exports.read_upcomming_events = async () => {
  try {
    const data = await Event.find({ date_start: { $gt: Date.now() } });
    return data;
  } catch (err) {
    console.log(err);
  }
};

// API for past events
exports.read_past_events = async () => {
  try {
    const data = await Event.find({ date_end: { $lt: Date.now() } });
    return data;
  } catch (err) {
    console.log(err);
  }
};
//----------------------------------END OF EVENT DATABASE APIs----------------------------------------//

