const ENV = process.env.NODE_ENV || "dev";
const { config } = require("../config/environments/");
const express = require("express");
const cors = require("cors");
const apiRoutes = require("../routes/api-routes");
const helmet = require("helmet");
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json({ limit: "20mb" }));
app.use(cors({ credentials: true, origin: config.corsOrigin }));
app.disable("x-powered-by");

module.exports.run = () => {
  if (ENV === "production") {
    app.set("trust proxy", 1);
    sessionOptions.cookie.secure = true;
  }
  app.use(helmet());
  app.use("", apiRoutes.routes());

  app.listen(config.port, () =>
    console.log(
      `Run port ${config.port}`
    )
  );
};
