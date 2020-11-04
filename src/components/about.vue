<template>
  <div class="about-me">
    <h2 id="title">about me</h2>

    <p id="content">
      Hey There! <br />
      My name is Liang (Taylor) Tang . I am a full stack development student.
      I'm currently enrolled in a Full Stack Development Diploma program,
      graduating in December of 2020. I like photography,cooking, soccer, video
      games and CODING. I am looking for my first job or internship of web
      development. Please contact me if you are interested in chatting with me!
    </p>
  </div>
</template>

<script>
export default {
  name: "about-me"
};
</script>

<style lang="scss" scoped>
.about-me {
  width: 80%;
  margin-left: 10%;
  top: 4%;
  font-family: "Jura", sans-serif;
  #title {
    margin-bottom: 5vh;
    font-size: 2rem;
    font-weight: bold;
  }
  #content {
    font-size: 1.2rem;
  }
}
@media only screen and (min-width: 1366px) {
  .about-me {
    width: 70%;
    margin-left: 15%;
    top: 5%;
    #title {
      width: 100%;
      margin-bottom: 10vh;
      text-align: right;
      padding-right: 5vw;
      font-size: 2.5rem;
    }
    #content {
      font-size: 1.5rem;
      line-height: 3rem;
    }
  }
}
</style>