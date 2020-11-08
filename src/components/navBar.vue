<template>
  <div class="nav-bar">
    <div id="nav-area">
      <div id="nav">
        <a href="/#about">about me</a>
        <a href="/#skill">technical skills</a>
        <a href="/#portfolio">portfolio</a>
        <a href="/#contact">contact me</a>
      </div>
      <div id="arrow">
        <p>Scroll</p>
        <p>Down</p>
        <img src="../assets/gif-arrow.gif" alt="" />
      </div>
      <a href="/#" id="toTop">
        <img src="../assets/up.png" alt="" />
      </a>
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
  height: 50vh;
  top: 25vh;
  > div {
    #nav {
      display: grid;
      row-gap: 4vh;
      a {
        display: block;
        font-family: "Orbitron", sans-serif;
        font-size: 1rem;
        transform: rotate(25deg);
        filter: drop-shadow(0px 0px 5px black);
        text-align: right;
      }
    }
    #arrow {
      position: absolute;
      bottom: 0;
      right: 5vw;
      display: grid;
      justify-items: center;
      p {
        font-family: "Orbitron", sans-serif;
        font-size: 1.2rem;
        color: white;
      }
      img {
        z-index: 90;
        width: 20vw;
        margin-right: 0vw;
      }
    }
    #toTop {
      position: fixed;
      bottom: 12vh;
      left: 10vw;
      img {
        width: 15vw;
        filter: drop-shadow(5px 5px 15px black);
        &:active {
          filter: drop-shadow(0px 0px 5px black);
        }
        opacity: 0.8;
      }
    }
  }
}
@media only screen and (min-width: 1366px) {
  .nav-bar {
    right: 20vw;
    top: 12vh;
    > div {
      #nav {
        column-gap: 2vw;
        justify-items: center;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        align-self: start;
        a {
          font-size: 1.2rem;
          transform: rotate(15deg);
          &:hover {
            filter: drop-shadow(5px 5px 15px black);
          }
          text-align: center;
        }
      }
      #arrow {
        position: absolute;
        bottom: 0;
        right: -5vw;
        display: grid;
        justify-items: center;
        p {
          font-family: "Orbitron", sans-serif;
          font-size: 1.2rem;
          color: white;
        }
        img {
          z-index: 90;
          width: 5vw;
          margin-right: 0vw;
        }
      }
      #toTop {
      bottom: 8vh;
      left: 8vw;
      img {
        width: 5vw;
        
        opacity: 0.8;
      }
    }
    }
  }
}
</style>