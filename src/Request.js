const key = `4a317191ccda83028ad4fb6bfe226d90`

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestAnime: `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=animation&page=1`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=horror&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
}

export default requests
