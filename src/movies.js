import { db } from "./dbConnect.js";

export function addNewMovie(req, res) {
  const newMovie = req.body;
  db.collection("movies")
    .add(newMovie)
    .then((doc) => res.status(201).send(`New Movie Added: ${doc.id}`))
    .catch((err) => res.status(500).send(err));
}

export async function getAllMovies(req, res) {
  const collection = await db
    .collection("movies")
    .get()
    .catch((err) => res.status(500).send(err));

  const movies = collection.docs.map((movie) => ({
    ...movie.data(),
    id: movie.id,
  }));
  res.status(201).send(movies);
}
