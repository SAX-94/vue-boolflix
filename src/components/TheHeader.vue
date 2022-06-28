<template>
    <div class="under-bar">
        <div class="container py-3">
            <div class="input-group mt-2 mb-2">
                <h1 class="text-danger">Boolflix</h1>
                <input type="text" class="form-control" placeholder="Enter here the title of the content you want to see"
                    v-model="userSearch" aria-describedby="button-addon2">
                <button class="btn btn-danger" type="button" id="button-addon2"
                    @click="onSearch">Search</button>
            </div>
        </div>
    </div>
</template>

<script>
import { searchMovies } from "../store";
export default {
    data() {
        return {
            name: "TheHeader",
            userSearch: "",
        }
    },
    methods: {
        onSearch() {
            console.log(this.userSearch)
            searchMovies(this.userSearch)
        }
    }
}
</script>

<style scoped>
.under-bar {
    background-color: cadetblue;
}
.input-group {
    width: 80vw;
    margin-left: auto;
    margin-right: auto;
}

h1.text-danger {
    margin-right: 15vw;
    font-weight: 700;
}
</style>