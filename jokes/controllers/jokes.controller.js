const Jokes = require("../models/jokes.model");

const allJokes = (req,res) => {
    Jokes.find()
    .then((allTheJokes) => res.json(allTheJokes))
    .catch((err) => console.log(err));
};

const oneJokeId = (req,res) =>{
    const { params } = req;
    Jokes.findOne({ _id: params._id})
    .then((joke) => res.json(joke))
    .catch((err) => console.log(err));
};

const createJoke = (req,res) => {
    const {body} = req;
    Jokes.create (body)
    .then((newJoke) => res.json(newJoke))
    .catch((err) => console.log(err));
}

const updateJoke = (req,res) => {
    Jokes.findOneAndUpdate({_id: req.params._id}, req.body, {
        new:true,
        runValidators: true,
    })
    .then((updatedJoke) => res.json(updatedJoke))
    .catch((err) => console.log(err)); 
};

const deleteJoke = (req,res) => {
    Jokes.deleteOne({_id: req.params._id})
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
}

module.exports = {
    allJokes,
    oneJokeId,
    createJoke,
    updateJoke,
    deleteJoke
}
