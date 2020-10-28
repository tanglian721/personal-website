<template>
  <div class="personal-info">
    <div id="text-info">
      <p>Liang (Taylor) Tang</p>
      <p id="major">Junior full stack developer</p>
    </div>
    <div id="img">
      <img src="../assets/MyEmoji.gif" alt="" />
    </div>
    <div id="interesting">
      <img id="bake" src="../assets/bake.png" alt="">
      <img id="dslr" src="../assets/dslr-camera.png" alt="">
      <img id="ball" src="../assets/football-ball.png" alt="">
      <img id="game" src="../assets/game-console.png" alt="">
      <img id="code" src="../assets/code.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "personal-info"
};
</script>

<style lang="scss" scoped>
.personal-info {
  #text-info {
    font-family: "Orbitron", sans-serif;
    color: white;
    font-size: 1.5rem;
    position: relative;
    left: 5vw;
    top: 3vh;
    #major {
      margin-top: 2vh;
      font-size: 1rem;
    }
  }
  #img {
    position: absolute;
    right: 5vw;
    top: 2vh;
    img {
      width: 20vw;
      border-radius: 30%;
    }
  }
  #interesting {
    position: relative;
    left: 8vw;
    top: 15vh;
    width: 40vw;
    height: 25vh;
    img{
      position: absolute;
      width: 12vw;
    }
    #bake {
      top: 0;
      left: 0;
    };
    #dslr {
      top: 0;
      right: 0;
    };
    #ball {
      bottom: 0;
      left: 0;
    };
    #game {
     bottom: 0;
      right: 0;
    };
    #code {
      width: 20vw;
      left: 11vw;
      top: 8vh;
    }
  }
}
</style>