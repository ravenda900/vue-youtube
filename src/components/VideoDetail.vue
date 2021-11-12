<template>
  <div v-if="video" class="col-md-8">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" width="560" height="315" :src="videoUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
    </div>
    <div class="details">
      <h4>{{ video.snippet.title }}</h4>
      <p>{{ video.snippet.description }}</p>
    </div>
    <form @submit.prevent="addComment">
      <textarea placeholder="Write your comment here..." id="comment" v-model="comment"></textarea>
      <input type="submit" value="Add comment" />
    </form>
    <ul v-if="videoComments[videoId]" id="comments">
      <li v-for="(comment, i) in videoComments[videoId]" :key="i">{{ comment }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: "VideoDetail",
  data() {
    return {
      comment: '',
    };
  },
  computed: {
    ...mapState({
      video: 'selectedVideo',
      videoComments: 'videoComments'
    }),
    videoId() {
      return this.video.id.videoId;
    },
    videoUrl() {
      return `https://www.youtube.com/embed/${this.videoId}`;
    },
    comments() {
      return this.videoComments[this.videoId] || [];
    }
  },
  methods: {
    ...mapMutations([
      'ADD_VIDEO_COMMENT'
    ]),
    addComment() {
      this.ADD_VIDEO_COMMENT({
        videoId: this.videoId,
        comment: this.comment
      });
      this.comment = '';
    }
  }
};
</script>

<style scoped>
.details {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
#comment {
  width: 100%;
  padding: 3px 5px;
  border-radius: 3px;
}
#comments {
  list-style: none;
}

</style>
