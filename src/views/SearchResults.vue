<template>
    <div>
        <h2>Search Results for "{{ $route.query.q }}"</h2>
        <ul>
            <li v-for="post in results" :key="post.objectID">
                <router-link :to="{ name: 'PostDetail', params: { id: post.objectID } }">{{ post.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            results: [],
        };
    },
    async created() {
        try {
            const response = await axios.get(
                `https://hn.algolia.com/api/v1/search?query=${this.$route.query.q}`
            );
            this.results = response.data.hits;
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    },
    watch: {
        '$route.query.q': 'fetchResults',
    },
    methods: {
        async fetchResults() {
            try {
                const response = await axios.get(
                    `https://hn.algolia.com/api/v1/search?query=${this.$route.query.q}`
                );
                this.results = response.data.hits;
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        },
    },
};
</script>