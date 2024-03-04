import axios from "axios";


export const searchMovies  = async (searchMovie) => {

   const options = {
  method: 'GET',
  url: `https://api.themoviedb.org/3/search/movie`,
  params: {query: `${searchMovie}`, include_adult: 'false', language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzM5MTI4NDdhZTMwM2FkYWU4ODQ3YzliMWMyYTc4NSIsInN1YiI6IjY1ZGU1NWNhNzc3NmYwMDE3YzExZmVkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zJSzu_3ggQU6_-limPJApYBp-BJZzXT-tp2nrAX4bOI'
  }
};
    
  const response = await axios
  .request(options)
  .then(function (response) {
    return response.data.results


    // console.log(response.data.results);
  })
  .catch(function (error) {
    console.error(error);
  });
  // console.log(response);
  return response
};

export default searchMovies