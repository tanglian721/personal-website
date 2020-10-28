<template>
  <div class="nav-bar">
    <div id="nav-area">
      <a href="#">about me</a>
      <a href="#">portifolio</a>
      <a href="#">contact me</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar"
};
</script>

<style lang="scss" scoped>
.nav-bar {
  right: 5vw;
  top: 25vh;
  > div {
    display: grid;
    row-gap: 10vh;
    a {
      display: block;
      font-family: "Orbitron", sans-serif;
      font-size: 1.2rem;
      transform: rotate(25deg);
      filter: drop-shadow(0px 0px 5px black);
    }
  }
}
</style>