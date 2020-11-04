<template>   
  <div class="skill">
    <span id="skill"></span>
    <div id="title">technical skills</div>
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
  </div>
</template>

<script>
export default {
  name: "page-skill"
};
</script>

<style lang="scss" scoped>
.skill {
  top: 16%;
  width: 80%;
  margin-left: 10%;
  font-family: "Jura", sans-serif;
  #title {
    position: absolute;
    right: 5vw;
    font-size: 2rem;
    font-weight: bold;
  }
  #frame {
    position: relative;
    top: 10vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 1.2rem;
    row-gap: 1vh;
  }
}
@media only screen and (min-width: 1366px) {
  .skill {
  top: 12%;
  width: 70%;
  margin-left: 15%;
  #title {
    left: 5vw;
    font-size: 2.5rem;
  }
  #frame {
    position: relative;
    top: 15vh;
    left: 5vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    font-size: 1.5rem;
    row-gap: 3vh;
  }
}
}
</style>