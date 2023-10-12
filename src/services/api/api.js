function discover(type, genre, currentPage) {
    return `https://api.themoviedb.org/3/discover/${type}?api_key=e2c7e2bffd34a508df0d5cb1690b0e45&adult=false&with_genres=${genre}&page=${currentPage}&with_original_language=en`
}
function search(type, searchKey) {
    return `https://api.themoviedb.org/3/search/${type}?api_key=e2c7e2bffd34a508df0d5cb1690b0e45&language=en-US&region=US&language=en-US&page=1&include_adult=false&query=${searchKey}`
}
function getDetails(type, showId) {
    return `https://api.themoviedb.org/3/${type}/${showId}?api_key=e2c7e2bffd34a508df0d5cb1690b0e45&language=en-US&append_to_response=credits,videos`;
}
function getRecommenditons (type,genre,page){
    return `https://api.themoviedb.org/3/discover/${type}?api_key=e2c7e2bffd34a508df0d5cb1690b0e45&with_genres=${genre}&page=${page}&include_adult=false&with_original_language=en`
}
const getTrending =`https://api.themoviedb.org/3/trending/all/week?api_key=e2c7e2bffd34a508df0d5cb1690b0e45&language=en-US` 
const topRated = `https://api.themoviedb.org/3/tv/top_rated?api_key=e2c7e2bffd34a508df0d5cb1690b0e45&language=en-US`;
const homeShow = 'https://api.themoviedb.org/3/tv/88052?api_key=e2c7e2bffd34a508df0d5cb1690b0e45&language=en-US&append_to_response=images&include_image_language=en,null'
const baserUrl_posterBig = "https://image.tmdb.org/t/p/w342";
const baserUrl_posterSmall = "https://image.tmdb.org/t/p/w92"
const baseUrl_posterMid = "https://image.tmdb.org/t/p/w185";
const baseUrl_original = `https://image.tmdb.org/t/p/w1280`;
const small_backdrop = `https://image.tmdb.org/t/p/w300`;
const mediumBackDrop = `https://image.tmdb.org/t/p/w780`;

export {
    discover,
    search,
    getDetails,
    getRecommenditons,
    homeShow,
    baserUrl_posterBig,
    baserUrl_posterSmall,
    baseUrl_original,
    baseUrl_posterMid,
    small_backdrop,
    getTrending,
    mediumBackDrop,
    topRated
}