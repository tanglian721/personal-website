<template>
  <div class="contact">
    <span id="contact"></span>
    <h2>my contact</h2>
    <div id="link">
      <a href="mailto:taylor721@gmail.com">[ Email ]</a>
      <a href="https://www.linkedin.com/in/liang-tang-192702a4/">[ Linkin ]</a>
      <a href="https://github.com/tanglian721">[ GitHub ]</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact"
};
</script>

<style lang="scss" scoped>
.contact {
  width: 80vw;
  height: 20vh;
  margin-left: 10vw;
  bottom:-2vh;
    font-family: "Jura", sans-serif;
  h2 {
    color: white;
    font-size: 2rem;
    text-shadow: 1px 1px 5px rgba($color: #000000, $alpha: 1);
  }
  #link {
    // background-color: white;
    >a {
      position: relative;
      top: 3vh;
      display: inline-block;
      padding: 3vw;
       transform: rotate(20deg);
       font-size: 1.2rem;
    }
  }
}
@media only screen and (min-width: 1366px) {
.contact {
  width: 80vw;
  height: 10vh;
  margin-left: 10vw;
  font-family: "Jura", sans-serif;
  h2 {
    color: white;
    font-size: 3rem;
    text-shadow: 1px 1px 5px rgba($color: #000000, $alpha: 1);
  }
  #link {
    // background-color: white;
    >a {
      position: relative;
      top: -4vh;
      display: inline-block;
      padding: 0 8vw;
      left: 20vw;
       transform: rotate(10deg);
       font-size: 2rem;
    }
  }
}  
}
</style>