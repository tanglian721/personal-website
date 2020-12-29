<template>
  <div class="home">
    <div class="mobile-background" v-if="this.$store.getters.mobile">
      <img @click="toggleMenu" src="../assets/bg-half.jpg" alt="" />
    </div>
    <div class="mobile-background" v-if="this.$store.getters.desktop">
      <img src="../assets/bg.jpg" alt="" />
    </div>
    <logo-div />
    <!-- <img src="../assets/logo-w.png" alt="" class="logo" /> -->
    <transition appear name="title">
      <div v-if="iftitle" class="title">
        <div class="group">
          <transition name="top">
            <h1 v-if="ifhello" class="hello" key="hello" @mouseover="showAbout">
              Hello,
            </h1>
            <h1
              v-else
              @click="aboutPage"
              class="about"
              key="about"
              @mouseleave="ifhello = true"
            >
              about
            </h1>
          </transition>
        </div>
        <div class="group">
          <transition name="middle">
            <h1 v-if="ifiam" class="iam" key="iam" @mouseover="showProjects">
              I am
            </h1>
            <h1
              v-else
              class="project"
              @click="projectPage"
              key="project"
              @mouseleave="ifiam = true"
            >
              project
            </h1>
          </transition>
        </div>
        <div class="group">
          <transition name="bottom">
            <h1
              v-if="ifliang"
              class="liang"
              key="liang"
              @mouseover="showContact"
            >
              Liang
            </h1>
            <h1
              v-else
              class="contact"
              key="contact"
              @click="contactPage"
              @mouseleave="ifliang = true"
            >
              contact
            </h1>
          </transition>
        </div>
      </div>
    </transition>
    <!-- <div class="change_btn"></div> -->
  </div>
</template>

<script>
import logoDiv from "../components/logoDiv.vue";
export default {
  components: { logoDiv },
  data() {
    return {
      iftitle: true,
      ifhello: true,
      ifiam: true,
      ifliang: true,
    };
  },
  methods: {
    toggleMenu() {
      this.ifhello = !this.ifhello;
      this.ifiam = !this.ifiam;
      this.ifliang = !this.ifliang;
    },
    aboutPage() {
      this.iftitle = false;
      setTimeout(() => {
        this.$router.push("about");
      }, 800);
    },
    projectPage() {
      this.iftitle = false;
      setTimeout(() => {
        this.$router.push("project");
      }, 800);
    },
    contactPage() {
      this.iftitle = false;
      setTimeout(() => {
        this.$router.push("contact");
      }, 800);
    },
    showAbout() {
      if (this.$store.getters.desktop) {
        this.ifhello = false;
      } else {
        this.ifhello = !this.ifhello;
        this.ifiam = !this.ifiam;
        this.ifliang = !this.ifliang;
      }
    },
    showProjects() {
      if (this.$store.getters.desktop) {
        this.ifiam = false;
      } else {
        this.ifhello = !this.ifhello;
        this.ifiam = !this.ifiam;
        this.ifliang = !this.ifliang;
      }
    },
    showContact() {
      if (this.$store.getters.desktop) {
        this.ifliang = false;
      } else {
        this.ifhello = !this.ifhello;
        this.ifiam = !this.ifiam;
        this.ifliang = !this.ifliang;
      }
    },
  },
  computed: {
    name() {
      return this.data;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/style.scss";
.home {
  box-sizing: border-box;
  position: relative;
  height: 100vh;
  display: grid;
  align-items: center;
  overflow: hidden;
  width: 100vw;
  // background-color: #fff;
  .mobile-background {
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
    // background-color: black;
    img {
      position: absolute;
      z-index: 2;
      right: 0;
      top: -10vh;
      height: 120vh;
      position: absolute;
    }
  }
  .title {
    z-index: 5;
    top: 20vh;
    left: 10vw;
    position: absolute;
    display: grid;
    height: 25em;
    // justify-items: end;
    width: fit-content;
    .group {
      height: 3.8em;
      overflow: hidden;
    }
    h1 {
      color: white;
      font-family: $fontTitle;
      font-size: 3rem;
    }
    .hello,
    .about {
      color: red;
    }
  }
  .logo {
    position: absolute;
    z-index: 5;
    width: 4em;
    top: 1em;
    right: 2em;
  }
}
.top-enter-active {
  transition: all 0.5s linear;
}
.middle-enter-active {
  transition: all 0.5s linear 0.5s;
}
.bottom-enter-active {
  transition: all 0.5s linear 1s;
}
.top-enter,
.middle-enter,
.bottom-enter {
  transform: translateY(100%);
}
.title-enter-active,
.title-leave-active {
  transition: all 0.5s linear;
}
.title-enter,
.title-leave-to {
  transform: rotateY(90deg);
}
@media only screen and (min-width: 1024px) {
  .home {
    box-sizing: border-box;
    position: relative;
    height: 100vh;
    display: grid;
    align-items: center;
    overflow: hidden;
    width: 100vw;
    // background-color: #fff;
    .mobile-background {
      position: absolute;
      top: 0;
      z-index: 1;
      width: 100%;
      height: 100vh;
      // background-color: black;
      img {
        position: absolute;
        z-index: 2;
        right: 0;
        top: 0;
        height: 100vh;
        width: 100%;
        object-fit: cover;
        position: absolute;
      }
    }
    .title {
      z-index: 5;
      top: 25vh;
      left: 20vw;
      position: absolute;
      display: grid;
      height: 25em;
      // justify-items: end;
      width: fit-content;
      .group {
        height: 4.5em;
        overflow: hidden;
      }
      h1 {
        color: white;
        font-family: $fontTitle;
        font-size: 3.5rem;
        &:hover {
          cursor: pointer;
        }
      }
      .hello,
      .about {
        color: red;
      }
    }
    .logo {
      position: absolute;
      z-index: 5;
      width: 4em;
      top: 1em;
      right: 2em;
    }
  }
  .top-enter-active {
    transition: all 0.3s linear;
  }
  .middle-enter-active {
    transition: all 0.3s linear;
  }
  .bottom-enter-active {
    transition: all 0.3s linear;
  }
}
</style>