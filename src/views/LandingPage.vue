<template>
  <div class="landing">
    <transition appear name="bg-fade">
      <div class="back"></div>
    </transition>
    <img class="gif" src="../assets/bgc.gif" alt="" />
    <div class="logo">
      <transition appear name="logo-fade">
        <img v-if="enter" src="../assets/logo-w.png" alt="" />
      </transition>
    </div>
    <div class="enter">
      <transition appear name="button-fade">
        <div class="button" v-if="enter" @click="home"><u>Enter...</u></div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enter: true,
    };
  },
  methods: {
    home() {
      setTimeout(() => {
        this.$router.push("/homepage");
      }, 1000);
      this.enter = false;
    },
  },
};
</script>
<style lang="scss" scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css);
.landing {
  position: relative;
  overflow: hidden;
}
.back {
  z-index: 1;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.808);
  --animate-duration: 2s;
}
.gif {
  z-index: -1;
  position: absolute;
  top: 0;
}
.logo {
  z-index: 2;
  position: relative;
  height: 100vh;
  width: 100vw;
  display: grid;
  align-items: center;
  justify-items: center;
  --animate-duration: 2s;
  --animate-delay: 1s;
  img {
    width: 20vw;
  }
}
.enter {
  position: absolute;
  height: 4em;
  z-index: 2;
  bottom: 0;
  width: 100vw;
  display: grid;
  justify-items: center;
  .button {
    color: white;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    font-size: 1.2rem;
    :hover {
      filter: drop-shadow(2px 2px 5px white);
      cursor: pointer;
    }
  }
}
.bg-fade-enter-active {
  transition: all 1s linear;
}
.bg-fade-enter {
  opacity: 0;
}
.logo-fade-enter-active {
  transition: all 1.5s ease-in 0.3s;
}
.logo-fade-enter {
  opacity: 0;
  transform: rotateX(90deg);
  // transform: scale(0.1);
}
.logo-fade-leave-active {
  transition: all 1s ease-out;
}
.logo-fade-leave-to {
  opacity: 0;
  //   transform: rotateX(90deg);
  transform: scale(10);
}

.button-fade-enter-active {
  transition: all 1.5s ease-in 1s;
}
.button-fade-enter {
  transform: translateY(100%);
}
.button-fade-leave-active {
  transition: all 0.5s ease-in;
}
.button-fade-leave-to {
  opacity: 0;
}

@media only screen and (min-width: 1024px) {
  .gif{
    width: 100vw;
  }
  .logo {
    img {
      width: 10vw;
    }
  }
}
</style>