const express = require("express");
const user_apis = require("../controllers/user_apis");
const router = express.Router();
router.use(express.urlencoded({ extended: false }));
router.use(express.json());


router.get("/token",(req,res)=>{
  user_apis.authenticate(req,res)
})
router.post("/signup", (req, res) => {
  user_apis.register(req, res);
});

module.exports = router;
