<template>
    <div class="post-list">
        <h2>Top Stories</h2>
        <div class="sort-options">
            <label for="sort">Sort by:</label>
            <select id="sort-type" v-model="sortType" @change="fetchPosts">
                <option value="story">Stories</option>
                <option value="job">Jobs</option>
                <option value="question">Questions</option>
                <option value="poll">Polls</option>
            </select>
            <select id="sort-by" v-model="sortBy" @change="fetchPosts">
                <option value="popularity">Popularity</option>
                <option value="recent">Most Recent</option>
            </select>
            <select id="sort-recent" v-model="sortRecent" @change="fetchPosts">
                <option value="last24h">Last 24h</option>
                <option value="lastWeek">Last week</option>
                <option value="lastMonth">Last month</option>
            </select>
        </div>
        <div v-if="loading" class="loading">Loading...</div>
        <ul v-else>
            <li v-for="post in posts" :key="post.id" class="post-card">
                <a :href="post.url" target="_blank" class="post-title">{{ post.title }}</a>
                <div class="post-details">
                    <span>{{ post.points }} points</span> |
                    <span>{{ post.num_comments }} comments</span> |
                    <span>by {{ post.author }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['tag', 'searchQuery'],
    data() {
        return {
            posts: [],
            loading: true,
            sortType: 'story',
            sortBy: 'popularity',
            sortRecent: 'last24h'
        };
    },
    watch: {
        '$route.query.tag': 'fetchPosts',
        searchQuery: 'fetchPosts',
    },
    methods: {
        async fetchPosts() {
            this.loading = true;
            const tag = this.$route.query.tag || this.sortType || 'front_page';
            const searchQuery = this.searchQuery || '';

            const url = `https://hn.algolia.com/api/v1/search?tags=${tag}&query=${searchQuery}`;

            try {
                const response = await axios.get(url);
                this.posts = response.data.hits;
            } catch (error) {
                console.error(error);
            } finally {
                this.loading = false;
            }
        },
    },
    created() {
        this.fetchPosts();
    },
};
</script>

<style scoped src="../styles/post-list.css"></style>
