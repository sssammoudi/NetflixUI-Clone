const APIKey = "ef76803b17ef5bfd31f53ec56679add9";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKey}&language=en-US`,
  fetchNetflix: `/discover/tv?api_key=${APIKey}&with_networks=213`,
  fetchRated: `/movie/top_rated?api_key=${APIKey}&language=en-US`,
  fetchAction: `/discover/movie?api_key=${APIKey}&with_genres=28`,
  fetchRomance: `/discover/movie?api_key=${APIKey}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKey}&with_genres=99`,
  fetchComedie: `/discover/movie?api_key=${APIKey}&with_genres=35`,
  fetchHorror: `/discover/movie?api_key=${APIKey}&with_genres=27`,
};

export default requests;
