import express from "express"

import cors from "cors"

import {addNewMovie, getAllMovies}
    from "./src/movies.js"

const PORT = 3004
const app = express ()
app.use (express.json())

app.get ('/movies', getAllMovies)

app.post ('/movies', addNewMovie)

app.listen (PORT, () => {
    console.log (`listening on http://localhost:${PORT}`);
});


