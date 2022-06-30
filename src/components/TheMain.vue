<template>
    <div>
        <div id="container moviesList">

            <ul class="list-unstyled text-center" v-for="(movie, i) in moviesList" :key="i">
                <li class="text-start">
                    {{ movie.id }}
                </li>
                <li class="my-2">
                    <span class="text-primary">Title</span> :
                    <span class="text-success">{{ movie.title }}</span>
                </li>
                <li class="my-2">
                    <span class="text-primary">Original Title</span> :
                    <span class="text-danger">{{ movie.original_title }}</span>
                </li>
                <li class="my-2">
                    <span class="text-primary">Languages </span> :
                    <span class="text-info">{{ movie.original_language }}</span>
                </li>
                <li class="my-2 border-bottom">
                    <span class="text-primary">Vote </span> :
                    <span class="">{{ movie.vote_average }}</span>
                </li>
            </ul>
        </div>

        <div id="container seriesList">

            <ul class="list-unstyled text-center">
                <li>

                </li>
                <!-- Future varie ed eventuali MovieCards -->
            </ul>

        </div>
    </div>
</template>

<script>
import { state } from "../store";
export default {
    data() {
        return {
            name: "TheMain"
        }
    },
    computed: {
        moviesList() {
            return state.moviesList;
        },
    },
    methods: {

    },
};
</script>


<style>

</style>