import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Backend fungerar på Raspberry Pi 🚀");
});

app.listen(3000, () => console.log("Server kör på http://localhost:3000"));
