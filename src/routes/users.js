const express = require("express");

const router = express.Router();

/*
            OR
const express = require("express");
const router = express.router();
   import express and creates a router Object


*/

router.get("/", (req, res) => {     //router routes
  res.json({
    users: [
      "Vasantha",
      "Manu"
    ]
  });
});

module.exports = router;