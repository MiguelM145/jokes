const JokeController = require("../controllers/jokes.controller")

module.exports = app =>{
    app.get("/api/jokes", JokeController.allJokes);
    app.post("/api/jokes", JokeController.createJoke);
    app.get("/api/jokes/:_id", JokeController.oneJokeId);
    app.put("/api/jokes/:_id", JokeController.updateJoke);
    app.delete("/api/jokes/:_id", JokeController.deleteJoke);
}