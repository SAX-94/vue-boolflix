<template>
    <div class="container">
        <div id=" moviesList">

            <ContCard>

            </ContCard>

        </div>

        <div id="seriesList">
            <ContCard />
        </div>
    </div>
</template>

<script>
// import { state } from "../store";
import ContCard from "./ContCard.vue";
export default {
    data() {
        return {
            name: "TheMain"
        };
    },
    computed: {

    },
    methods: {},
    components: { ContCard }
};
</script>



<style scoped>
</style>