import Vue from "vue";
import axios from "axios";

export const store = Vue.observable({
    moviesList: [],
});

/**
 *
 * @param {title searched in the search bar} text
 */
export function searchMovie(text) {
    axios
        .get("https://api.themoviedb.org/3/search/movie", {
            params: {
                api_key: "7147a9e71923a77d5c6a5bca282eaa18",
                query: text,
                language: "it-IT",
            },
        })
        .then((resp) => {
            store.moviesList = resp.data.results;
            console.log(resp);
            console.log(store);
        });
}
