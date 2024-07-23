const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3001;

app.get("/", (req, res) => {
  res.json([
    {
      title: "Hello World!",
    },
    {
      title: "hello world2",
    },
    {
      title: "asdiuasid",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
