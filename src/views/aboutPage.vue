<template>
  <div class="about">
    <logo-div />
    <div class="title">
      <vue-aos animation-class="animate__animated animate__slideInRight">
        <h1>I am a</h1>
      </vue-aos>
      <vue-aos animation-class="animate__animated animate__slideInRight">
        <h1>Junior</h1>
      </vue-aos>
      <vue-aos animation-class="animate__animated animate__slideInRight">
        <h1>Full stack</h1>
      </vue-aos>
      <vue-aos animation-class="animate__animated animate__slideInRight">
        <h1>Developer</h1>
      </vue-aos>
    </div>
    <vue-aos animation-class="animate__animated animate__slideInRight">
      <p class="content">
        Hey There! <br />
        <br />
        My name is Liang (Taylor) Tang . I am a full stack development student.
        I'm currently enrolled in a Full Stack Development Diploma program,
        graduating in December of 2020. I like photography, cooking, soccer,
        video games and CODING. I am looking for my first job or internship of
        web development. Please contact me if you are interested in chatting
        with me!
      </p>
    </vue-aos>
    <vue-aos animation-class="animate__animated animate__slideInRight">
      <div class="skill">
        <div class="Skill-title">Technical Skills</div>
        <div class="frame">
          <li>HTML5</li>
          <li>CSS3/SASS</li>
          <li>JavaScript</li>
          <li>Vue.js</li>
          <li>Python</li>
          <li>Flask</li>
          <li>MaribaDB</li>
          <li>DBeaver</li>
          <li>Figma</li>
          <li>Apache</li>
          <li>APis</li>
          <li>Wordpress</li>
          <li>Bash</li>
        </div>
      </div>
    </vue-aos>
  </div>
</template>

<script>
import logoDiv from "../components/logoDiv.vue";
import VueAos from "vue-aos";

export default {
  components: { logoDiv, VueAos },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/style.scss";

.about {
  width: 100vw;
  height: 160vh;
  position: relative;
  background-color: black;
  .title {
    position: relative;
    top: 20vh;
    box-sizing: border-box;
    margin-left: 10vw;
    h1 {
      color: white;
      font-family: $fontTitle;
      font-size: 3rem;
   
    }
  }
  .content {
    position: relative;
    color: white;
    font-family: $fonts;
    font-size: 1.2rem;
    box-sizing: border-box;
    top: 30vh;
    width: 80%;
    margin-left: 10%;
    line-height: 2rem;
  }
  .skill {
    position: relative;
    color: white;
    font-family: $fonts;
    box-sizing: border-box;
    top: 40vh;
    width: 80%;
    margin-left: 10%;
    line-height: 2rem;
    .Skill-title {
        font-family: $fontTitle;
        margin-bottom: 1em;
        font-size: 1.5rem;
        text-align: center;
    }
    .frame{
        font-size: 1.2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
  }
}
@media only screen and (min-width: 1024px) {
  .about {
  width: 100vw;
  height: 160vh;
  position: relative;
  background-color: black;
  .title {
    position: relative;
    top: 20vh;
    box-sizing: border-box;
    margin-left: 10vw;
    h1 {
      color: white;
      font-family: $fontTitle;
      font-size: 3rem;
         display: inline;
      margin-right: 0.5em;
    }
  }
  .content {
    position: relative;
    color: white;
    font-family: $fonts;
    font-size: 1.5rem;
    box-sizing: border-box;
    top: 30vh;
    width: 80%;
    margin-left: 10%;
    line-height: 2rem;
  }
  .skill {
    position: relative;
    color: white;
    font-family: $fonts;
    box-sizing: border-box;
    top: 50vh;
    width: 80%;
    margin-left: 10%;
    line-height: 2rem;
    .Skill-title {
        font-family: $fontTitle;
        margin-bottom: 1em;
        font-size: 1.8rem;
        text-align: center;
    }
    .frame{
        font-size: 1.5rem;
        margin-left: 5em;
        margin-top: 4em;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}
}
</style>