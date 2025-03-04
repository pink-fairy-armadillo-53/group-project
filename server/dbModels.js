const mongoose = require("mongoose");

//Mongodb Atlas URI - commenting to test easily in local mongodb
// const  MONGO_URI = "mongodb+srv://movieapp53:movieapp2025@movieappcluster.wwhuu.mongodb.net/?retryWrites=true&w=majority&appName=MovieAppCluster";

const MONGO_URI = "mongodb://127.0.0.1:27017/moviereviews";

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function run() {
  //try {
  // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
  await mongoose.connect(MONGO_URI, clientOptions);
  await mongoose.connection.db.admin().command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
  //}
  // finally {
  //   // Ensures that the client will close when you finish/error
  //   await mongoose.disconnect();
  //}
}
run().catch(console.dir);

const reviewMovieSchema = new mongoose.Schema({
  username: String,
  user_id: String,
  movie_id: String,
  publish_date: String,
  content: String,
  stars: Number
});

const ReviewMovie = mongoose.model("reviewmovie", reviewMovieSchema);

module.exports = ReviewMovie;
