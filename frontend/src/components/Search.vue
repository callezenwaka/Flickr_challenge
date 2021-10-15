<template>
  <div class="search">
    <div class="search--tag">
      <form @submit.prevent="onSearchTag">
        <label for=""></label>
        <input class="search--input" type="search" name="keyword" id="keyword" v-model="keyword" placeholder="Search feed by tag. . .">
        <div class="button--controls" v-if="isValid">
          <button class="search--button" id="search" type="submit">Search By Tag</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      keyword: "",
    };
  },
  computed: {
    ...mapGetters(["feeds"]),
    isValid() {
      return this.keyword !== "";
    },
  },
  // created() {
  //   this.getFeeds();
  // },
  methods: {
    ...mapActions(["getFeeds", "getFeedsByTag"]),
    async onSearchTag() {
      this.getFeedsByTag({ keyword: this.keyword });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search--tag {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  margin-bottom: 1rem !important;
  margin-top: 1rem !important;
}
.search--label {
  font-size: 14px;
  color: rgb(61, 79, 88);
  position: relative;
  height: 16px;
  /*width: 36px;*/
  text-align: left;
  font-weight: bold;
  line-height: 16px;
  letter-spacing: 0.02em;
}
.search--input {
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(229, 231, 235, 1);
  border-radius: 4px;
  height: 52px;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  margin-top: 5px;
  padding-left: 12px;
  padding-right: 12px;
  transition: border-color 150ms ease-in-out 0s;
}
.button--controls {
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  padding-bottom: 3rem;
}
.button--controls button {
  cursor: pointer;
  padding: 0.5rem 0.5rem;
  border-radius: 5px;
  background-color: rgba(209, 213, 219, 1);
  box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px,
    rgb(60 64 67 / 15%) 0px 1px 3px 1px;
  transition: all 1s ease-out;
}
.button--controls button:hover {
  background-color: rgba(229, 231, 235, 1);
}
/* .button--controls button:first-child {
  margin-right: 1rem !important;
}
.button--controls button:last-child {
  margin-right: 0rem !important;
} */

.search--button.isValid {
  cursor: pointer;
  background-color: rgba(209, 213, 219, 1);
}
.search--button.isValid:hover {
  opacity: 0.5;
}

/* mini screen */
@media screen and (min-width: 730px) {
  .search {
    width: 700px;
    margin: 0 auto;
  }
}
</style>
