const express = require("express");
const multer = require("multer");
const db_apis = require("../controllers/event_db_apis");
const path = require("path");
const isImage = require("is-image");
const router = express.Router();

// defining images for images
const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, path.join(__dirname, "../../public/covers"));
  },
  // extentions
  filename: function (request, file, callback) {
    const suff = Math.round(Math.random() * 1e9);
    callback(
      null,
      path.parse(file.originalname).name +
        "_" +
        Date.now() +
        "_" +
        suff +
        path.extname(file.originalname)
    );
  },
});

// upload parameters for multer
const upload = multer({
  storage: storage,
  limits: {
    // file size limit is 8MB
    fieldSize: 1024 * 1024 * 8,
  },

  fileFilter: function (request, file, callback) {
    const name = path.basename(file.originalname);
    if (!isImage(name)) {
      return callback(new Error("Uploaded File is not an Image"));
    }
    callback(null, true);
  },
}).single("cover");

//auth middileware: pending

router.post("/add-event", upload, async (req, res) => {
  // image: req.file.filename
  try {
    await db_apis.insert_event(req, res);
    res.status(200).send("uploaded");
  } catch (err) {
    res.status(403).send(err.message);
  }
});

//Public API routes

router.get("/upcomming-events", async (req, res) => {
  try {
    const data = await db_apis.read_upcomming_events(req, res);
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

router.get("/ongoing-events", async (req, res) => {
  try {
    const data = await db_apis.read_ongoing_events(req, res);
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

router.get("/past-events", async (req, res) => {
  try {
    const data = await db_apis.read_past_events();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

// For Future "If events are organized by cu"
// router.get('our-events',(req,res)=>{
// })

module.exports = router;
