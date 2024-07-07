const express = require("express");
const apartmentRouter = express.Router();
const {
  createApartment,
  getAllApartments,
  getApartmentDetails,
} = require("../controllers/apartmentController");

apartmentRouter.post("/createApartment", createApartment);
apartmentRouter.get("/getAllApartments", getAllApartments);
apartmentRouter.get("/getApartmentDetails/:id", getApartmentDetails);

module.exports = apartmentRouter;
