<template>
    <div>
        <SearchBar />
        <PostList />
    </div>
</template>

<script>
import PostList from '../components/PostList.vue';
import SearchBar from '../components/SearchBar.vue';

export default {
    components: {
        PostList,
        SearchBar,
    },
};
</script>