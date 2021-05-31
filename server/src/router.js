const express = require("express");
const router = express.Router();
const { addOffer, getAllOffers, deleteOffer, loginSupplier, registerSupplier, getSupplierDetails } = require("./controllers");

const auth = require(`./auth`);

router.post("/offer", addOffer);
router.get("/offers", getAllOffers);
router.delete("/offers/:id", deleteOffer);
router.post("/login", loginSupplier);
router.post("/register", registerSupplier);
router.get(`/me`, auth, getSupplierDetails);

module.exports = router;
