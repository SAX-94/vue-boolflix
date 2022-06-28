<template>
    <div class="row align-items-center justify-content-around">
        <div class="col-2">
            <h1>Boolflix</h1>
        </div>
        <div class="col-4">
            <div class="input-group mb-3 px-3 py-5">
                <input v-model="currentSearch" type="text" class="form-control">
                <button @click="onsearchMovie" class="btn btn-outline-secondary" type="button">Search</button>
            </div>
        </div>
    </div>
</template>

<script>
import { searchMovie } from '../store';
export default {
    name: 'TheHeader',
    data() {
        return {
            currentSearch: ''
        }
    },
    methods: {
        onsearchMovie() {
            searchMovie(this.currentSearch, 'movie')
        }

    }
}
</script>


<style scoped lang="scss">
</style>