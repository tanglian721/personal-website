<template>
  <div class="contact">
    <h2 id="contact">my contact</h2>
    <span id="contact"></span>
    <vue-aos animation-class="animate__animated animate__fadeIn">
    <div id="link">
      <a href="mailto:taylor721@gmail.com">[ Email ]</a>
      <a href="https://www.linkedin.com/in/liang-tang-192702a4/">[ Linkin ]</a>
      <a href="https://github.com/tanglian721">[ GitHub ]</a>
    </div>
    </vue-aos>
    <div id="layFive"></div>
  </div>
</template>

<script>
import VueAos from 'vue-aos'

export default {
  name: "contact",
  components: {
    VueAos
  }
};
</script>

<style lang="scss" scoped>
.contact {
  width: 80vw;
  height: 20vh;
  margin-left: 10vw;
  font-family: "Jura", sans-serif;
  bottom: 0;
  #layFive {
    z-index: 30;
    position: absolute;
    bottom: 0;
    left: -10vw;
    width: 120vw;
    height: 70vh;
    background: #16425b;
    box-shadow: 0px 1px 4px 0px #000000 25%;
  }
  h2 {
    position: absolute;
    top: -8vh;
    right: 0;
    z-index: 32;
    color: white;
    font-size: 2rem;
    text-shadow: 1px 1px 5px rgba($color: #000000, $alpha: 1);
  }
  #link {
    position: relative;
    width: 100%;
    z-index: 35;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    // background-color: white;
    >a {
      position: relative;
      top: 8vh;
      display: inline-block;
      transform: rotate(20deg);
      font-size: 1.2rem;
    }
  }
}
@media only screen and (min-width: 1366px) {
.contact {
  width: 80vw;
  height: 10vh;
  margin-left: 10vw;
  font-family: "Jura", sans-serif;
  h2 {
    color: white;
    top: -25vh;
    font-size: 2.5rem;
    text-shadow: 1px 1px 5px rgba($color: #000000, $alpha: 1);
  }
  #link {
    width: 60%;
    left: 20vw;
    // background-color: white;
    >a {
      position: relative;
      top: -9vh;
      display: inline-block;
      left: 20vw;
       transform: rotate(-10deg);
       font-size: 2rem;
    }
  }
}  
}
</style>