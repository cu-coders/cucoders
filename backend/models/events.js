const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
//--------------------------------END OF IMPORTS---------------------------------------//

//--------------------------------EVENT SCHEMA-----------------------------------------//
const eventSchema = mongoose.Schema({
  imageSrc: {
    type: String,
    require: true,
    trim: true,
  },
  author: {
    type: String,
    require: true,
    trim: true,
  },
  category: {
    type: String,
    require: true,
    trim: true,
  },
  title: {
    type: String,
    require: true,
    trim: true,
  },
  subtitle: {
    type: String,
    require: true,
    trim: true,
  },
  description: {
    type: String,
    require: true,
    trim: true,
  },
  url: {
    type: String,
    require: true,
    trim: true,
  },
  date_start: {
    type: Number,
    require: true,
  },
  date_end: {
    type: Number,
    require: true,
  },
});
//--------------------------------END EVENT SCHEMA-----------------------------------------//

//----------------------------------DB MIDDLEWARES-----------------------------------------//
// For invalid Date range
eventSchema.pre("save", function (next) {
  const start = this.date_start;
  const end = this.date_end;
  if (start > end) {
    // Removes the uploaded image
    fs.unlink(
      path.join(__dirname, "../../public/covers" + this.cover.toString()),
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
    throw new Error("Invalid date range");
  } else {
    next();
  }
});
//--------------------------------END OF DB MIDDLEWARES-----------------------------------------//
const Event = new mongoose.model("event", eventSchema);
module.exports = Event;
