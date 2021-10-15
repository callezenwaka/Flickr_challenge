<template>
  <div class="feeds">
    <div class="feed--container">
      <div class="feed--list">
        <div class="feed--card" v-for="(feed, index) in feeds" :key="index">
          <div>
            <b-card
              :title="feed.title"
              :img-src="feed.media.m"
              :img-alt="feed.title"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <!-- <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text> -->

              <b-button :href="feed.link" variant="primary">&plus; Follow</b-button>
            </b-card>
          </div>
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
  padding: 12px 12px;
  background-color: #ffffff;
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
  position: relative;
  flex-direction: column;
  margin-bottom: 20px;
  width: 328px;
  /* height: 182.222px; */
}
/* mini screen */
@media screen and (min-width: 730px) {
  .feeds {
    width: 700px;
    margin: 0 auto;
  }
}
</style>
