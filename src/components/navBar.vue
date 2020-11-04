<template>
  <div class="nav-bar">
    <div id="nav-area">
      <a href="/#about">about me</a>
      <a href="/#portfolio">portfolio</a>
      <a href="/#contact">contact me</a>
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
@media only screen and (min-width: 1366px) {
  .nav-bar {
  right: 20vw;
  top: 8vh;
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 3vw;
    a {
      font-size: 1.5rem;
      transform: rotate(-10deg);
    }
  }
}
}
</style>