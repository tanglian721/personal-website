<template>
  <div class="project-div">
    <div class="menu" @click="detail" :style="move" id="mark">
      <h1>{{ project.name }}</h1>
      <h3>{{ project.brief }}</h3>
    </div>
    <transition name="hiden-show">
      <div class="hide" v-if="show">
        <img v-if="this.$store.getters.desktop" :src="project.Image_L" alt="" />
        <img v-else :src="project.image_s" alt="" />
        <div>
          <p>
            {{ project.description }}
          </p>
          <p>{{ project.other }}</p>
        </div>
        <div class="link">
          <a class="visit" :href="project.https"
            >Visit
            <div class="underline"></div
          ></a>
          <a class="visit" :href="project.code">
            View Code
            <div class="underline"></div>
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      move: {},
      active: {
        transform: "translateX(5%)",
      },
      unactive: {
        transform: "translateX(0)",
      },
    };
  },
  props: {
    project: {
      type: Object,
    },
  },
  methods: {
    detail() {
      // let top = document.getElementById("mark");
      // console.log(top.scrollTop);
      // console.log(top.offset);
      let i = false;
      if (this.show) {
        i = true;
      }
      this.$store.state.show_hide = !this.$store.state.show_hide;
      if (this.$store.getters.desktop) {
        console.log("a");
        setTimeout(() => {
          this.move = this.active;
        }, 100);
      }
      setTimeout(() => {
        if (i) {
          this.show = false;
        } else {
          this.show = true;
        }
      }, 200);
    },
    website() {},
  },
  watch: {
    close() {
      this.show = false;
      this.move = this.unactive;
      // document.getElementById("move").style.transform = "None"
    },
  },
  computed: {
    close() {
      return this.$store.getters.project_toggle;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/style.scss";
html {
  scroll-behavior: smooth;
}
.project-div {
  .menu {
    transition: scroll 1s ease-in-out;
    background-color: BLACK;
    h1 {
      font-family: $fontTitle;
    }
    h3 {
      color: red;
      font-family: $fonts;
    }
  }
  .hide {
    margin-top: 3em;
    display: grid;
    justify-items: center;
    width: 90%;
    margin-left: 5%;
    row-gap: 2em;
    transform-origin: top;
    transition: transform 0.4s ease-in-out;
    overflow: hidden;
    font-family: $fonts;
    font-size: 1.2rem;
    img {
      width: 100%;
    }
    .link {
      display: grid;
      grid-template-columns: 1fr 1fr;
      .visit {
        width: fit-content;
        .underline {
          height: 2px;
          width: 110%;
          background-color: #fff;
        }
      }
    }
  }
}
// .hiden-show-enter-active {
//   transition: all 1s linear;
// }
.hiden-show-enter,
.hiden-show-leave-to {
  transform: scaleY(0);
}
@media only screen and (min-width: 1024px) {
  .project-div {
    position: relative;
    .menu {
      h1 {
        font-family: $fontTitle;
        font-size: 3rem;
        width: fit-content;
      }
      h3 {
        color: red;
        font-family: $fonts;
        font-size: 2rem;
        width: fit-content;
      }
      transition: transform 0.4s ease-in-out;
      &:hover {
        transform: translateX(8%);
        cursor: pointer;
      }
    }
    .hide {
      z-index: 10;
      position: fixed;
      margin-top: 2em;
      top: 10vh;
      right: 10vw;
      display: grid;
      justify-items: center;
      width: 30vw;
      margin-left: 0;
      row-gap: 1em;
      transform-origin: top;
      transition: transform 0.4s ease-in-out;
      height: 70vh;
      overflow: auto;
      img {
        width: 100%;
        height: 20vw;
        object-fit: cover;
        overflow: hidden;
      }

      p{
        margin-top: 5px;
         text-indent:1.5em
      }
      .link {
        display: grid;
        grid-template-columns: 1fr 1fr;
        .visit {
          width: fit-content;
          .underline {
            height: 2px;
            width: 110%;
            background-color: #fff;
          }
        }
      }
    }
  }
  .hiden-show-enter,
  .hiden-show-leave-to {
    transform: rotateY(90deg);
  }
}
</style>