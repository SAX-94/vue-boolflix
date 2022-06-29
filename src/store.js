import Vue from "vue";
import axios from "axios";

export const state = Vue.observable({
    moviesList: [],
    seriesList: [],
});

export function searchMovies(userSearch) {
    axios
        .get("https://api.themoviedb.org/3/search/movie", {
            params: {
                api_key: "7147a9e71923a77d5c6a5bca282eaa18",
                query: userSearch,
                language: "it-IT",
            },
        })
        .then((resp) => {
            state.moviesList = resp.data.results;
        });

    axios
        .get("https://api.themoviedb.org/3/search/tv", {
            params: {
                api_key: "7147a9e71923a77d5c6a5bca282eaa18",
                query: userSearch,
                language: "it-IT",
            },
        })
        .then((resp) => {
            state.seriesList = resp.data.results;
        });
}