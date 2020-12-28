<template>
  <div class="logo-div">
    <img src="../assets/logo-w.png" @click="home" alt="" class="logo" />
  </div>
</template>

<script>
export default {
  methods: {
    home() {
      this.$router.push("/homepage")
    }
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
  img {
    width: 4em;
  }
}
</style>