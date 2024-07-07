const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const apartmentRouter = require("./routes/ApartmentRouter");

app.use(bodyParser.json());
app.use(cors());

app.use("/v1/apartment/", apartmentRouter);

const db = require("./models");

const port = process.env.PORT || 8003;

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`server started on port ${port}`);
  });
});
