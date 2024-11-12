<template>
    <div>
        <h2>{{ post.title }}</h2>
        <p>By: {{ post.by }}</p>
        <a :href="post.url" target="_blank">Read more</a>
        <div v-if="comments.length">
            <h3>Comments:</h3>
            <ul>
                <li v-for="comment in comments" :key="comment.id" v-html="comment.text"></li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['id'],
    data() {
        return {
            post: null,
            comments: [],
        };
    },
    async created() {
        try {
            const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.id}.json`);
            this.post = response.data;
            if (this.post.kids) {
                const commentPromises = this.post.kids.slice(0, 5).map(commentId =>
                    axios.get(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`)
                );
                const comments = await Promise.all(commentPromises);
                this.comments = comments.map(comment => comment.data);
            }
        } catch (error) {
            console.error("Error fetching post details:", error);
        }
    },
};
</script>
