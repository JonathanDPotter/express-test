import express from "express";

const router = express();

const PORT = process.env.PORT || 1337;

router.get("/", (req, res, next) => {
  res.send(`<h1>This is the server running on port: ${PORT}`);
});

router.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
