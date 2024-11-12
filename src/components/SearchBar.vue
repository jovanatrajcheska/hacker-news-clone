<template>
    <div class="search-bar">
        <button @click="search">
            <i class="fas fa-search"></i>
        </button>
        <input type="text" v-model="searchQuery" @keyup.enter="search"
            placeholder="Search stories by title, URL, or author..." />
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: '',
        };
    },
    methods: {
        search() {
            this.$emit('search', this.searchQuery);
        },
    },
};
</script>

<style scoped src="../styles/search-bar.css"></style>