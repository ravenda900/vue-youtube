<template>
  <ul class="list-group col-md-4">
    <VideoListItem
      v-for="video in videos"
      :video="video"
      :key="video.etag"
    >
    </VideoListItem>
  </ul>
</template>

<script>
import { mapState } from 'vuex';
import VideoListItem from "./VideoListItem";
export default {
  name: "VideoList",
  components: {
    VideoListItem
  },
  computed: {
    ...mapState([
      'videos'
    ])
  }
};
</script>

<style></style>
