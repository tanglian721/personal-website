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
      <img id="code" src="../assets/code.png" alt="" />
      <img id="bake" src="../assets/bake.png" alt="" />
      <img id="dslr" src="../assets/dslr-camera.png" alt="" />
      <img id="ball" src="../assets/football-ball.png" alt="" />
      <img id="game" src="../assets/game-console.png" alt="" />
    </div>
    <div id="layOne"></div>
  </div>
</template>

<script>
export default {
  name: "personal-info"
};
</script>

<style lang="scss" scoped>
.personal-info {
  width: 100%;
  overflow: hidden;
  height: 95vh;
  position: relative;
  #layOne {
    position: absolute;
    top: -20%;
    left: -80vw;
    width: 250vw;
    height: 90vh;
    background-color: #8fa6cb;
    transform: rotate(25deg);
    box-shadow: 0px 1px 4px 0px #000000 25%;
  }
  #text-info {
    z-index: 51;
    font-family: "Orbitron", sans-serif;
    color: white;
    font-size: clamp(1rem, 6vw, 2rem);
    position: relative;
    left: 5vw;
    top: 3vh;
    #major {
      margin-top: 2vh;
      font-size: clamp(0.8rem, 4vw, 1.8rem);
    }
  }
  #img {
    z-index: 51;
    position: absolute;
    right: 5vw;
    top: 2vh;
    img {
      width: 20vw;
      border-radius: 30%;
    }
  }
  #interesting {
    z-index: 51;
    position: relative;
    left: 15vw;
    top: 15vh;
    width: 40vw;
    height: 25vh;
    img {
      position: absolute;
      width: 12vw;
    }
    #bake {
      top: 0;
      left: 0;
    }
    #dslr {
      top: 0;
      right: 0;
    }
    #ball {
      bottom: 0;
      left: 0;
    }
    #game {
      bottom: 0;
      right: 0;
    }
    #code {
      width: 20vw;
      left: 11vw;
      top: 8vh;
    }
  }
}
@media only screen and (min-width: 1366px) {
  .personal-info {
    width: 100%;
     height: 120vh;
  
    #layOne {
      position: absolute;
      top: -25vh;
      left: -20vw;
      width: 150vw;
      height: 105vh;
      background-color: #8fa6cb;
      transform: rotate(12deg);
      box-shadow: 0px 1px 4px 0px #000000 25%;
    }
    #text-info {
      top: 8vh;
      left: 8vw;
      font-size: clamp(1rem, 6vw, 2rem);
      #major {
        font-size: clamp(0.8rem, 4vw, 1.6rem);
      }
    }
    #img {
        top: 8vh;
        right: 9vw;
      img {
        width: 6vw;
      }
    }
    #interesting {
      width: 50vw;
      height: 30vh;
      top: 15vh;
      left: 8vw;
      // background-color: white;
      img {
        position: relative;
        width: 4vw;
        margin-left: 2vw;
      }
      #bake {
        top: 0;
        left: 0;
      }
      #dslr {
        top: 0;
        left: 0;
      }
      #ball {
        top: 0;
        left: 0;
      }
      #game {
        top: 0;
        left: 0;
      }
      #code {
        width: 4vw;
        margin-left: 0;
        top: 0;
        left: 0;
      }
    }
  }
}
</style>