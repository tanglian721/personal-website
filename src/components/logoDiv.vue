<template>
  <div class="logo-div">
    <img
      src="../assets/logo-w.png"
      @click="home"
      alt=""
      class="logo"
      id="logo"
    />
  </div>
</template>

<script>
export default {
  methods: {
    home() {
      this.$router.push("/homepage");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/style.scss";

.logo-div {
  position: fixed;
  z-index: 99;
  top: 1em;
  right: 2em;
  filter: $shadow;
  transition: transform 0.5s;
  img {
    width: 4em;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
}
@media only screen and (min-width: 1024px) {
  .logo-div {
    top: 3em;
    right: 4em;
  }
}
</style>