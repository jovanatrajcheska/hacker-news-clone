<template>
    <div class="sidebar">
        <img src="../assets/hn-logo.png" alt="Hacker News Logo" />
        <h2>Tags</h2>
        <ul>
            <li v-for="tag in tags" :key="tag.name">
                <i :class="tag.iconClass" class="tag-icon"></i>
                <router-link :to="{ name: 'Home', query: { tag: tag.value } }">{{ tag.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tags: [
                { name: 'All', value: 'front_page', iconClass: 'fas fa-home' },
                { name: 'Hot', value: 'story', iconClass: 'fas fa-fire' },
                { name: 'Show HN', value: 'show_hn', iconClass: 'fas fa-eye' },
                { name: 'Ask HN', value: 'ask_hn', iconClass: 'fas fa-question-circle' },
                { name: 'Polls', value: 'poll', iconClass: 'fas fa-poll' },
                { name: 'Jobs', value: 'job', iconClass: 'fas fa-briefcase' },
                { name: "Shipow", value: 'shipow', iconClass: 'fas fa-user' },
                { name: "Starred", value: 'starred', iconClass: 'fas fa-star' }
            ],
        };
    },
};
</script>
<style scoped src="../styles/side-bar.css"></style>
