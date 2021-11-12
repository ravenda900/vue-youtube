<template>
  <div class="container">
    <SearchBar></SearchBar>
    <div class="row">
      <VideoDetail />
      <VideoList></VideoList>
    </div>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
export default {
  name: "App",
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  }
};
</script>
