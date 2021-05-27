const express = require("express");
const router = express.Router();
const { addOffer, getAllOffers, deleteOffer } = require("./controllers");

router.post("/offer", addOffer);
router.get("/offers", getAllOffers);
router.delete("/offers/:id", deleteOffer);

module.exports = router;
