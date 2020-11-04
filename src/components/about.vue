<template>
  <div class="about-me">
    <h2 id="title"> about me </h2>
    <p id="content">Hey There! 
My name is Liang (Taylor) Tang . I am a full stack development student. I'm currently enrolled in a Full Stack Development Diploma program, graduating in December of 2020. I am a driven, passionate, and curious learner with a willingness to learn. There is something about negative space that is eye catching as I am very much about minimalism. I'm on the search for my first Developer position be it an internship or something more. Please reach out if you are interested in chatting more!
</p>

  </div>
</template>

<script>
  export default {
    name: "about-me"
  }
</script>

<style lang="scss" scoped>
.about-me {
  width: 80%;
  margin-left: 10%;
  top: 5%;
  font-family: 'Jura', sans-serif;
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
  width: 80%;
  margin-left: 10%;
  top: 5%;
  #title {
    width: 100%;
    margin-bottom: 15vh;
    text-align: right;
    padding-right: 5vw;
    font-size: 2.5rem;
  }
  #content {
    font-size: 2rem;
    line-height: 4rem;
  }
}
}
</style>