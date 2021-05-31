const express = require("express");
const router = express.Router();
const { addOffer, getAllOffers,getAllSuppliers, deleteOffer, loginSupplier, registerSupplier, getSupplierDetails } = require("./controllers");

const auth = require(`./auth`);


router.get("/offers", getAllOffers);
router.get("/suppliers", getAllSuppliers);
router.get(`/me`, auth, getSupplierDetails);

router.delete("/offers/:id", deleteOffer);

router.post("/offer", addOffer);
router.post("/login", loginSupplier);
router.post("/register", registerSupplier);


module.exports = router;
