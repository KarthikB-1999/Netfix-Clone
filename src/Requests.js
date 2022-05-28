const key = 'ece494952aaa4e40ad6754a114fd6194'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&include_adult=true`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US`,
    
  };

  export default requests