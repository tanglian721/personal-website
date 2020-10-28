<template>
  <div class="home-background">
    <div id="layOne"></div>
    <div id="layTwo"></div>
    <div id="layThree"></div>
    <div id="layFour"></div>
  </div>
</template>

<script>
export default {
  name: "home-background"
};
</script>

<style lang="scss" scoped>
.home-background {
  z-index: 0;
  overflow: hidden;
  box-sizing: border-box;
  #layOne {
    z-index: 4;
    position: relative;
    top: -1%;
    left: -23%;
    width: 200vw;
    height: 70vh;
    background-color: #8fa6cb;
    transform: rotate(25deg);
    box-shadow: 0px 1px 4px 0px #000000 25%;
  }
  #layTwo {
    z-index: 3;
    position: relative;
    top: -10%;
    left: -60%;
    width: 200vw;
    height: 100vh;
    background: #dbf4a7;
    transform: rotate(-25deg);
    box-shadow: 0px 1px 4px 0px #000000 25%;
  }
  #layThree {
    z-index: 2;
    position: relative;
    top: -15%;
    left: -35%;
    width: 200vw;
    height: 120vh;
    background: #d5f9de;

    transform: rotate(20deg);
    box-shadow: 0px 1px 4px 0px #000000 25%;
  }
  #layFour {
    z-index: 1;
    position: relative;
    top: -20%;
    left: -60%;
    width: 200vw;
    height: 100vh;
    background: #7d84b2;
    box-shadow: 0px 1px 4px 0px #000000 25%;
  }
}
</style>