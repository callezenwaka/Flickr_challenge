<template>
  <div class="home">
    <Search></Search>
    <Feeds></Feeds>
  </div>
</template>

<script>
// @ is an alias to /src
import Feeds from "@/components/Feeds.vue";
import Search from "@/components/Search.vue";
export default {
  name: "Home",
  components: {
    Feeds,
    Search,
  },
};
</script>
