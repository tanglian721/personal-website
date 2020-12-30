<template>
  <div class="contact">
    <logo-div />
    <h1>Contact :</h1>
    <div class="contact-area">
      <div class="email">
        <h3 v-if="show" @mouseover="show = false">Email</h3>
        <a v-else href="mailto:taylor721@gmail.com" @mouseleave="show = true">taylor721@gmail.com</a>
      </div>
      <div class="link">
        <a href="https://www.linkedin.com/in/liang-tang-192702a4/">Linkin</a>
      </div>
      <div class="github">
        <a href="https://github.com/tanglian721">GitHub</a>
      </div>
      <div class="resume">
        <a href="https://liangtang.ml/img/projects/Liang_Tang_Resume.pdf" download>Resume</a>
      </div>
    </div>
    <div class="message">
      <h3>
        Have questions? <br />
        Leave the message to me
      </h3>
      <input type="text" v-model="name" placeholder="name(required)" />
      <input type="text" v-model="email" placeholder="email(required)" />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        v-model="content"
        placeholder="content(required)"
      ></textarea>
      <h2 @click="message">
        Submit
        <div class="underline"></div>
      </h2>
    </div>
  </div>
</template>

<script>
import logoDiv from "../components/logoDiv.vue";
import axios from "axios"
export default {
  components: { logoDiv },
  data() {
    return {
      show: true,
      name: "",
      email: "",
      content: "",
    };
  },
  methods: {
    message() {
      axios
        .request({
          url: "https://liangtang.ml/api/message",
          method: "post",
          data: {
            name: this.name,
            email: this.email,
            content: this.content,
          },
        })
        .then((response) => {
          console.log(response.data);
          if (
            confirm(
              "Your message has been sent successfully! Do you want to go back to home page?"
            )
          ) {
            this.$router.push("/homepage");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    if (this.$store.getters.mobile) {
      this.show = false;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/style.scss";

.contact {
  width: 100vw;
  height: 120vh;
  position: relative;
  background-color: black;
  h1 {
    color: white;
    font-family: $fontTitle;
    position: relative;
    top: 4em;
    width: 80%;
    margin-left: 10%;
  }
  .contact-area {
    position: relative;
    top: 10em;
    width: 80%;
    margin-left: 10%;
    display: grid;
    row-gap: 2em;
    h3,
    a {
      color: red;
      font-family: $fonts;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
  .message {
    position: relative;
    top: 14em;
    width: 70%;
    margin-left: 15%;
    display: grid;
    row-gap: 2em;
    h3 {
      color: white;
      font-size: 1.5rem;
    }
    h2 {
      color: white;
      width: fit-content;
      justify-self: center;
      .underline {
        height: 2px;
        width: 110%;
        background-color: #fff;
      }
    }
  }
}
@media only screen and (min-width: 1024px) {
.contact {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: black;
  h1 {
    color: white;
    font-family: $fontTitle;
    position: relative;
    top: 4em;
    width: 70%;
    margin-left: 15%;
  }
  .contact-area {
    position: relative;
    top: 10em;
    width: 70%;
    margin-left: 15%;
    display: grid;
    row-gap: 2em;
    h3,
    a {
      color: red;
      font-family: $fonts;
      font-size: 1.8rem;
      font-weight: bold;
      transition: color 0.4s ease-in-out;
      &:hover{
        // transform: translateX(5%);
        color: white;
      }
    }
  }
  .message {
    position: relative;
    top: 14em;
    width: 40%;
    margin-left: 30%;
    display: grid;
    row-gap: 2em;
    h3 {
      color: white;
      font-size: 1.5rem;
    }
    h2 {
      color: white;
      width: fit-content;
      justify-self: center;
      .underline {
        height: 2px;
        width: 110%;
        background-color: #fff;
      }
    }
  }
}
}
</style>