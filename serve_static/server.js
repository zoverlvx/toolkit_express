const express = require("express")
const app = express();
const PORT = 3000 || process.env.PORT;

/*
sets up public directory
serves all files on /
*/

app.use("/", express.static("public"));


app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
