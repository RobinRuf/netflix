const API_KEY = "6635b046bebb1434f1ac5dfe5a84fcb6";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_gernes=28-action`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with-gernes=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with-gernes=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with-gernes=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with-gernes=99`,
};

export default requests;