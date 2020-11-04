<template>
  <div class="contact">
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
  height: 90vh;
  margin-left: 10vw;
  top: 11%;
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
      top: 5vh;
      display: inline-block;
      padding: 4vw;
       transform: rotate(20deg);
       font-size: 1.2rem;
    }
  }
}
@media only screen and (min-width: 1366px) {
.contact {
  width: 80vw;
  height: 90vh;
  margin-left: 10vw;
  top: 25%;
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