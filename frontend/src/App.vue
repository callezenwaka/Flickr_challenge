<template>
  <div id="app">
    <div id="nav">
      <router-link class="" to="/">Buzz Challenge</router-link>
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style>
body {
  display: block;
  margin: 0px;
  padding: 0;
}
#app {
  background-color: #f3f5f6;
}
#nav {
  padding: 1.5rem 1rem;
  box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px,
    rgb(60 64 67 / 15%) 0px 1px 3px 1px;
}
</style>
