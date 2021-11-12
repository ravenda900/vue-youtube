import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos: [],
    selectedVideo: null,
    videoComments: {}
  },
  getters: {
    getVideoComments(state) {
      return (videoId) => {
        console.log('coments', state.videoComments[videoId])
        return state.videoComments[videoId] || [];
      }
    }
  },
  mutations: {
    SET_VIDEOS (state, videos) {
      state.videos = videos;
    },
    SET_SELECTED_VIDEO (state, selectedVideo) {
      state.selectedVideo = selectedVideo;
    },
    ADD_VIDEO_COMMENT(state, { videoId, comment }) {
      if (state.videoComments[videoId]) {
        state.videoComments[videoId].push(comment);
      } else {
        state.videoComments[videoId] = [];
        state.videoComments[videoId].push(comment);
      }
    }
  },
  actions: {
    onTermChange(ctx, searchTerm) {
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: process.env.VUE_APP_YT_API_KEY,
            type: "video",
            part: "snippet",
            q: searchTerm
          }
        })
        .then(({ data }) => {
          ctx.commit('SET_VIDEOS', data.items);
        });
    }
  }
});