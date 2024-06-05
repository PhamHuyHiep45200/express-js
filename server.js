const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const port = 5000;

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/auth", (req, res) => {
  const { token } = req.query;
  if (token && +token < Date.now()) {
    return res.json({
      status: 401,
    });
  }
  return res.json({
    status: 200,
    data: Date.now() + 1000 * 10,
  });
});

app.get("/auth-user", (req, res) => {
  return res.json({
    status: 200,
    data: "user",
  });
});

app.get("/refresh", (req, res) => {
  res.json({
    status: 200,
    description: Date.now() + 2000 * 10,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
