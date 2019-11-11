<template>
    <div id="goods">
    <div v-for="category in categories" v-bind:key="category.name" class="list">
        <h1>{{category.name}}</h1>
        <div class="grid">
            <cell v-for="cell in category.cells" v-bind:key="cell.id" v-bind:cell="cell"></cell>
        </div>
    </div>
    </div>
</template>

<script>
import cell from "../components/cell.vue";
export default {
    watch: {
    // call again the method if the route changes
    '$route': '$store.dispatch("fetchData")'
    },
    computed: {
        categories() {
            return this.$store.state.categories;
        }
    },
    components: {
        cell
    }
}
</script>