const { Apartments, Images } = require("../models");

const getAllApartments = async (req, res) => {
  try {
    const apartments = await Apartments.findAll({ include: [Images] });
    return res.json({
      apartments: apartments,
      message: "successfully fetched all",
    });
  } catch (error) {
    console.error(error);
    return res.json({
      message: "something went wrong!,please try again later",
    });
  }
};

const createApartment = async (req, res) => {
  try {
    const data = req.body;
    const apartment = await Apartments.create(data, {
      include: [Images],
    });
    return res.json({ apartment, message: "successfully created" });
  } catch (error) {
    console.error(error);
    return res.json({
      message: "something went wrong!,please try again later",
    });
  }
};

const getApartmentDetails = async (req, res) => {
  try {
    const apartmentId = req.params.id;
    const apartment = await Apartments.findOne({
      where: { uuid: apartmentId },
      include: [Images],
    });
    return res.json({ apartment, message: "successfully fetched" });
  } catch (error) {
    console.error(error);
    return res.json({
      message: "something went wrong!,please try again later",
    });
  }
};

module.exports = {
  getAllApartments,
  createApartment,
  getApartmentDetails,
};
