import { createApp } from "./app.js";

import { MovieModel } from "./models/databaseMysql/movie.js";

createApp({ movieModel: MovieModel })