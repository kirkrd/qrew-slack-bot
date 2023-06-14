import express from "express";
import bodyParser from "body-parser";
import generateTimeReportMessage from "./messages";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/timereport", (req, res) => {
  res.send(generateTimeReportMessage());
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
