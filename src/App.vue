<template>
  <div id="app">
    <div class="container">
      <Sidebar />
      <main class="content">
        <SearchBar @search="setSearchQuery" />
        <PostList :tag="$route.query.tag" :searchQuery="searchQuery" />
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/SideBar.vue';
import SearchBar from './components/SearchBar.vue';
import PostList from './components/PostList.vue';

export default {
  components: {
    Sidebar,
    SearchBar,
    PostList,
  },
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    setSearchQuery(query) {
      this.searchQuery = query;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

.container {
  display: flex;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
