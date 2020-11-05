<template>
  <div class="nav-bar">
    <div id="nav-area">
      <!-- <a href="/#about">about me</a>
      <a href="/#skill">technical skills</a>      
      <a href="/#portfolio">portfolio</a>
      <a href="/#contact">contact me</a> -->
      <p>Scroll <br> Down</p>
      <img src="../assets/gif-arrow.gif" alt="">
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
    row-gap: 1vh;
    p{
      font-family: "Orbitron", sans-serif;
      font-size: 1.2rem;
      color: white;
    }
    img{
      z-index: 90;
      width: 20vw;
      margin-left: -3vw;
    }
    a {
      display: block;
      font-family: "Orbitron", sans-serif;
      font-size: 1.2rem;
      transform: rotate(25deg);
      filter: drop-shadow(0px 0px 5px black);
      text-align: right;
    }
  }
}
@media only screen and (min-width: 1366px) {
  .nav-bar {
  right: 20vw;
  top: 12vh;
  > div {
    display: grid;
    // grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 1vw;
    p{
      position: absolute;
      right:-10vw;
      top:20vh
    }
    img{
      position: absolute;
      right:-11vw;
      width: 6vw;
      top:25vh
  
    }
    a {
      font-size: 1rem;
      transform: rotate(-10deg);
      text-align: center;
    }
  }
}
}
</style>