<template>
  <div class="feeds">
    <div class="feed--container">
      <div class="feed--list">
        <div class="feed--card" v-for="(feed, index) in feeds" :key="index">
          <div><img :src="feed.media.m" :alt="feed.title" width="100px" height="auto"></div>
          <div>{{feed.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Feeds",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["feeds"]),
  },
  created() {
    this.getFeeds();
  },
  methods: {
    ...mapActions(["getFeeds", "getFeedsByTag"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.feed--container {
  padding: 0 12px;
}
.feed--list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  position: relative;
}
.feed--card {
  background-color: #ffffff;
  position: relative;
  flex-direction: column;
  margin-bottom: 20px;
  top: 0px;
  left: 0px;
  width: 328px;
  height: 182.222px;
}
/* mini screen */
@media screen and (min-width: 730px) {
  .feeds {
    width: 700px;
    margin: 0 auto;
  }
}
</style>
