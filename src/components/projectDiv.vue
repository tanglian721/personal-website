<template>
  <div class="project-div">
    <div class="menu" @click="detail" :style="move">
      <h1>{{ project.name }}</h1>
      <h3>{{ project.brief }}</h3>
    </div>
    <transition name="hiden-show">
      <div class="hide" v-if="show">
        <img src="../assets/HomeDelicious-d.png" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit numquam,
          ipsum molestias harum temporibus maiores quasi saepe repudiandae
          voluptatibus veniam. Consequuntur, neque eaque tempora ad inventore
          rerum incidunt expedita accusantium.
        </p>
        <p>{{ project.other }}</p>
        <div class="link">
          <div class="visit">
            Visit
            <div class="underline"></div>
          </div>
          <div class="visit">
            View Code
            <div class="underline"></div>
          </div>
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
      unactive:{
        transform: "translateX(0)"
      }
    };
  },
  props: {
    project: {
      type: Object,
    },
  },
  methods: {
    detail() {
      this.$store.state.show_hide = !this.$store.state.show_hide;
      setTimeout(() => {
        this.move = this.active
      }, 100);
      setTimeout(() => {
        this.show = true;
      }, 500);
    },
  },
  watch: {
    close(newValue) {
      console.log(newValue);
      this.show = false;
      this.move = this.unactive
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

.project-div {
  transition: transform 0.4s ease-in-out;
  .menu {
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
    overflow: hidden;
    transform-origin: top;
    transition: transform 0.4s ease-in-out;
    overflow: hidden;
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
      margin-top: 3em;
      top: 10vh;
      right: 10vw;
      display: grid;
      justify-items: center;
      width: 30vw;
      margin-left: 0;
      row-gap: 2em;
      overflow: hidden;
      transform-origin: top;
      transition: transform 0.4s ease-in-out;
      overflow: hidden;
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
  .hiden-show-enter,
  .hiden-show-leave-to {
    transform: rotateY(90deg);
  }
}
</style>