import axios from "axios";

const url = "https://api.themoviedb.org/3/movie/movie_id?language=en-US";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzEwMTI3MTBkOTBhNWMwODRmMmNjZmJmNmE0MTVjOCIsIm5iZiI6MTcyMTk4MTkxNS41MTYyMjUsInN1YiI6IjY2YTI2MzM1NDNlZTQ4OGVhMWU3ZmM2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ln38B4zL_FjM537u8HU8o1q2rCOPnwsk0JOVs9mTTho";

const fetchMovieDetails = async () => {
  const getData = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return getData.data.results;
};

export default fetchMovieDetails;
