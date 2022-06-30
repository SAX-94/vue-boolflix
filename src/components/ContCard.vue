<template>
    <div>
<!-------  MOVIES  ------->
        <div>
            <ul class="list-unstyled text-center" v-for="(movie, i) in moviesList" :key="i">
                <li>
                    <div class="container text-start">
                        <span class=" text-danger fs-3">Movies:</span>
                    </div>
                </li>
                <li>
                    <div>
                        <img :src="boolflixPoster + [movie.poster_path]" :alt="movie.title"> <!-- Movie poster-->
                    </div>
                </li>
                <li class="my-2">
                    <span class="text-primary">Title: </span> 
                    <span>{{ movie.title }}</span> <!-- Movie title -->
                </li>
                <li class="my-2">
                    <span class="text-primary">Original Title: </span> 
                    <span>{{ movie.original_title }}</span> <!-- Original title -->
                </li>
                <li class="my-2">
                    <span class="text-primary">Languages: </span>
                    <span>{{ movie.original_language }} </span>
                    <lang-flag :iso="movie.original_language"></lang-flag> <!-- Original language -->
                </li>
                <li class="my-2 border-bottom">
                    <span class="text-primary">Vote: </span>
                </li>
            </ul>
        </div>

<!-------  TV SERIES  ------->
        <div>
            <ul class="list-unstyled text-center" v-for="(serie, i) in seriesList" :key="i">
                <li>
                    <div class="container">
                        <img :src="boolflixPoster + [serie.poster_path]" :alt="serie.name">
                    </div>
                </li>
                <li>
                    <div class="container text-start">
                        <span class="text-primary fs-3">TV series:</span>
                    </div>
                </li>
                <li class="my-2 ">
                    <span class="text-warning">Title</span> <span class="text-success">{{ serie.name }} </span>
                    <!-- title of series -->
                </li>
                <li class="my-2 ">
                    <span class="text-warning">Original Title</span> <span
                        class="text-danger">{{ serie.original_name }}</span> <!-- original title of series -->
                </li>
                <li class="my-2 ">
                    <span class="text-warning">Languages</span> <span
                        class="text-info">{{ serie.original_language }}</span>
                    <lang-flag :iso="serie.original_language"></lang-flag> <!-- languages of series -->
                </li>
                <li class="my-2 border-bottom">
                    <span class="text-warning">Vote: </span>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import { state } from "../store";
export default {
    data() {
        return {
            voteArray: [1, 2, 3, 4, 5]
        }
    },
    computed: {
        moviesList() {
            return state.moviesList;
        },
        seriesList() {
            return state.seriesList;
        },
        boolflixPoster() {
            return "https://image.tmdb.org/t/p/" + "w342/"
        },
    },
}
</script>

<style>
</style>