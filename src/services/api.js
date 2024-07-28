import axios from "axios";

export const fetchMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzEwMTI3MTBkOTBhNWMwODRmMmNjZmJmNmE0MTVjOCIsIm5iZiI6MTcyMTk4MTkxNS41MTYyMjUsInN1YiI6IjY2YTI2MzM1NDNlZTQ4OGVhMWU3ZmM2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ln38B4zL_FjM537u8HU8o1q2rCOPnwsk0JOVs9mTTho",
    },
  };
  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (err) {
    console.log(err);
  }
};

export const fetchMovieDetails = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzEwMTI3MTBkOTBhNWMwODRmMmNjZmJmNmE0MTVjOCIsIm5iZiI6MTcyMTk4MTkxNS41MTYyMjUsInN1YiI6IjY2YTI2MzM1NDNlZTQ4OGVhMWU3ZmM2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ln38B4zL_FjM537u8HU8o1q2rCOPnwsk0JOVs9mTTho",
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchMovieCast = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzEwMTI3MTBkOTBhNWMwODRmMmNjZmJmNmE0MTVjOCIsIm5iZiI6MTcyMTk4MTkxNS41MTYyMjUsInN1YiI6IjY2YTI2MzM1NDNlZTQ4OGVhMWU3ZmM2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ln38B4zL_FjM537u8HU8o1q2rCOPnwsk0JOVs9mTTho",
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data.cast;
  } catch (err) {
    console.log(err);
  }
};
