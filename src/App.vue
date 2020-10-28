<template>
  <div class="app">
    <personal-info />
    <nav-bar />
    <home-background />
  </div>
</template>
<script>
import HomeBackground from "../src/components/homepageBackground.vue";
import NavBar from "../src/components/navBar.vue";
import PersonalInfo from "../src/components/personalInfo.vue";
export default {
  components: {
    HomeBackground,
    PersonalInfo,
    NavBar
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Jura&family=Orbitron:wght@400;500&display=swap");
* {
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  color: white;
}
.app {
  position: relative;
  width: 100vw;
  height: 300vh;
  .home-background {
    z-index: 0;
    position: absolute;
    width: 100%;
    height: 300vh;
    // background-color: rgba(0, 255, 255, 0.082);
    top: 0%;
  }
  .personal-info {
    z-index: 50;
    position: relative;
  }
  .nav-bar{
    z-index: 90;
    position: absolute;
  }
}
</style>
