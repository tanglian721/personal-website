<template>
  <div class="about-me">
    <span id="about"></span>
    <h2 id="title">about me</h2>
    <!-- <transition
      appear
      enter-active-class="animate__animated animate__slideInRight"
    > -->
     <vue-aos animation-class="animate__animated animate__slideInRight">
      <p id="content">
        Hey There! <br />
        My name is Liang (Taylor) Tang . I am a full stack development student.
        I'm currently enrolled in a Full Stack Development Diploma program,
        graduating in December of 2020. I like photography, cooking, soccer,
        video games and CODING. I am looking for my first job or internship of
        web development. Please contact me if you are interested in chatting
        with me!
      </p>
    </vue-aos>
    <!-- </transition> -->
    <div id="layTwo"></div>
  </div>
</template>

<script>
import VueAos from 'vue-aos'
export default {
  name: "about-me",
  components: {
    VueAos
  }
};
</script>

<style lang="scss" scoped>
.about-me {
  width: 80%;
  height: 100vh;
  margin-left: 10%;
  // top: 4%;
  font-family: "Jura", sans-serif;
  #about {
    position:absolute;
    top:-15vh
  }
  #layTwo {
    z-index: 45;
    position: absolute;
    top: -40vh;
    left: -80vw;
    width: 250vw;
    height: 125vh;
    background: #dbf4a7;
    transform: rotate(-25deg);
    box-shadow: 0px 1px 4px 0px #000000 25%;
  }
  #title {
    position: relative;
    top: -5vh;
    z-index: 47;
    margin-bottom: 3vh;
    font-size: 2rem;
    font-weight: bold;
  }
  #content {
    line-height: 5vh;
    position: relative;
    z-index: 47;
    font-size: clamp(0.8rem, 5vw, 1.2rem);
  }
}
@media only screen and (min-width: 1366px) {
  .about-me {
  #about{
    position: absolute;
    top: -30vh;
  }
     top: -20vh;
     position: relative;
    #layTwo {
      top: -100vh;
      left: -80vw;
      width: 250vw;
      height: 170vh;
      transform: rotate(-10deg);
      box-shadow: 0px 1px 4px 0px #000000 25%;
    }
    #title {
     top: -20vh;
     left: 10vw;
     font-size: clamp(2rem, 8vw, 2.5rem);
    }
    #content {
      width: 90%;
      margin-left: 5%;
      font-size: clamp(1rem, 2vw, 2rem);
      line-height: 3rem;
    }
  }
}
</style>