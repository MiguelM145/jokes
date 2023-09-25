const express = require("express");
const app = express();
const port = 8000; 
require("./config/mongoose")

app.use(express.json(), express.urlencoded({extended:true}));

const JokeRoutes = require("./routes/jokes.routes");
JokeRoutes(app);


app.listen(8000, () => console.log(`Server up and running on ${port}`));
