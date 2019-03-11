const express = require("express"),
  app = express();

// This is a comment to test flow

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server is running on " + PORT));
