const { Router } = require("express");
const router = Router();

router.get("/api/all-category", (req, res) => {
  return res.json({
    message: "category",
  });
});

module.exports = router;
