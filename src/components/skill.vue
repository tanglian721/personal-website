<template>   
  <div class="skill">
    <span id="skill"></span>
    <div id="title">technical skills</div>
      <p id="content">
    <vue-aos animation-class="animate__animated animate__slideInRight">
    <div id="frame">
      <li>HTML5</li>
      <li>CSS3/SASS</li>
      <li>JavaScript</li>
      <li>Vue.js</li>
      <li>Python</li>
      <li>MaribaDB</li>
      <li>DBeaver</li>
      <li>Figma</li>
      <li>Apache</li>
      <li>APis</li>
      <li>Wordpress</li>
      <li>Bash</li>
    </div>
      </vue-aos>
      <div id="layThree"></div>

  </div>
</template>

<script>
import VueAos from 'vue-aos'

export default {
  name: "page-skill",
    components: {
    VueAos
  }
};
</script>

<style lang="scss" scoped>
.skill {
  #skill {
    position: absolute;
    top:-10vh
  }
  #layThree {
    z-index: 40;
    position: absolute;
    top: -30vh;
    left: -50vw;
    width: 200vw;
    height: 100vh;
    background: #d5f9de;

    transform: rotate(25deg);
    box-shadow: 0px 1px 4px 0px #000000 25%;
  }
  width: 80%;
  margin-left: 10%;
  font-family: "Jura", sans-serif;
  #title {
    z-index: 42;
    position: absolute;
    top: 2vh;
    right: 5vw;
    font-size: 2rem;
    font-weight: bold;
  }
  #frame {
    z-index: 42;
    position: relative;
    top: 20vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: clamp(0.8rem, 5vw ,1.2rem);
    row-gap: 2vh;
  }
}
@media only screen and (min-width: 1366px) {
  .skill {
  top: -25vh;
  width: 70%;
  margin-left: 15%;
  #layThree {
    top: -50vh;
    left: -50vw;
    width: 200vw;
    height: 130vh;
    background: #d5f9de;

    transform: rotate(10deg);
    box-shadow: 0px 1px 4px 0px #000000 25%;
  }
  #title {
    right: 5vw;
    font-size: clamp(2rem, 8vw, 2.5rem);
  }
  #frame {
    position: relative;
    top: 20vh;
    left: 5vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    font-size: clamp(1rem, 2vw, 2rem);
    row-gap: 3vh;
  }
}
}
</style>