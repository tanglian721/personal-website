<template>
  <div class="portfolio">
    <span id="portfolio"></span>
    <h2 id="title">portfolio</h2>
    <div id="slider">
      <hooper id="frame" :settings="hooperSettings">
        <slide id="pizza1" class="portfolio-content">
          <h3 class="title">Okotoks Pizza Version 1</h3>
          <div class="content">
            <img
              class="img desk"
              @click="introAppear"
              src="../assets/Okotoks Pizza 1.png"
              alt=""
            />
            <img
              class="img mobile"
              @click="introAppear"
              src="../assets/pizza1-m.png"
              alt=""
            />
            <a href="https://liangpizza.tk/" class="link">
              <img src="../assets/external-link.png" alt="" />
            </a>
            <transition
              enter-active-class="animate__animated animate__slideInDown"
              leave-active-class="animate__animated animate__slideOutUp"
            >
              <div v-if="if_intro" @click="introAppear" class="intro">
                <h3>Okotoks Pizza Version 1</h3>
                <div class="splitter"></div>
                <p>
                  Okotoks Pizza website is the final project of HTML and
                  CSS/SASS cousrse.
                </p>
                <p class="tag">Tags: HTML, CSS/SASS</p>
                <p>OKOTOKS PIZZA's website is mobile and desktop compatible.</p>
                <a
                  href="https://github.com/tanglian721/OkotoksPizzaVertical"
                  class="github"
                  >View Code</a
                >
              </div>
            </transition>
          </div>
        </slide>
        <slide id="pizza2" class="portfolio-content">
          <h3 class="title">Okotoks Pizza Version 2</h3>
          <div class="content">
            <img
              class="img desk"
              @click="introAppear"
              src="../assets/Okotoks Pizza 2.png"
              alt=""
            />
            <img
              class="img mobile"
              @click="introAppear"
              src="../assets/pizza2-m.png"
              alt=""
            />
            <a href="" class="link">
              <img src="../assets/external-link.png" alt="" />
            </a>
            <transition
              enter-active-class="animate__animated animate__slideInDown"
              leave-active-class="animate__animated animate__slideOutUp"
            >
              <div v-if="if_intro" @click="introAppear" class="intro">
                <h3>Okotoks Pizza Version 2</h3>
                <div class="splitter"></div>
                <p>
                  Okotoks Pizza website is the final project of HTML and
                  CSS/SASS cousrse.
                </p>
                <p class="tag">Tags: HTML, CSS/SASS</p>
                <p>OKOTOKS PIZZA's website is mobile and desktop compatible.</p>
                <a
                  href="https://github.com/tanglian721/OkotoksPizzaHorizontal"
                  class="github"
                  >View Code</a
                >
              </div>
            </transition>
          </div>
        </slide>
        <slide id="Pokemon" class="portfolio-content">
          <h3 class="title">Pokemon Battle Game</h3>
          <div class="content">
            <img
              class="img"
              @click="introAppear"
              src="../assets/Pokemon.png"
              alt=""
            />
            <a href="https://tangbaoworld.ml/" class="link">
              <img src="../assets/external-link.png" alt="" />
            </a>
            <transition
              enter-active-class="animate__animated animate__slideInDown"
              leave-active-class="animate__animated animate__slideOutUp"
            >
              <div v-if="if_intro" @click="introAppear" class="intro">
                <h3>Pokemon Battle Game</h3>
                <div class="splitter"></div>
                <p>
                  Pokemon Battle is turn-based mini game which is a project of
                  JavaScript.
                </p>
                <p class="tag">Tags: JavaScript, HTML, CSS/SASS</p>
                <p>Pokemon Battle is mobile compatible.</p>
                <a
                  href="https://github.com/tanglian721/PokemonBattle"
                  class="github"
                  >View Code</a
                >
              </div>
            </transition>
          </div>
        </slide>
        <slide id="Tweet" class="portfolio-content">
          <h3 class="title">LTweeter</h3>
          <div class="content">
            <img
              class="img desk"
              @click="introAppear"
              src="../assets/Ltweeter.png"
              alt=""
            />
            <img
              class="img mobile"
              @click="introAppear"
              src="../assets/Ltweeter-m.png"
              alt=""
            />
            <a href="http://ltweet.tk/#/signin" class="link">
              <img src="../assets/external-link.png" alt="" />
            </a>
            <transition
              enter-active-class="animate__animated animate__slideInDown"
              leave-active-class="animate__animated animate__slideOutUp"
            >
              <div v-if="if_intro" @click="introAppear" class="intro">
                <h3>LTweeter</h3>
                <div class="splitter"></div>
                <p>
                  LTweeter is a simple twitter clone which is built using a
                  VUE.js platform.
                </p>
                <p class="tag">Tags:VUE.js, Api, JavaScript, HTML, CSS/SASS</p>
                <p>LTweeter is mobile and desktop compatible.</p>
                <a
                  href="https://github.com/tanglian721/Vue-Tweeter"
                  class="github"
                  >View Code</a
                >
              </div>
            </transition>
          </div>
        </slide>
        <slide id="bwdx" class="portfolio-content">
          <h3 class="title">BWDX company website</h3>
          <div class="content">
            <img
              class="img desk"
              @click="introAppear"
              src="../assets/bwdx-L.png"
              alt=""
            />
            <img
              class="img mobile"
              @click="introAppear"
              src="../assets/bwdx-m.png"
              alt=""
            />
            <a href="http://bwdx.tk/" class="link">
              <img src="../assets/external-link.png" alt="" />
            </a>
            <transition
              enter-active-class="animate__animated animate__slideInDown"
              leave-active-class="animate__animated animate__slideOutUp"
            >
              <div v-if="if_intro" @click="introAppear" class="intro">
                <h3>BWDX company website</h3>
                <div class="splitter"></div>
                <p>
                  BWDX is a company website which I am building for a Chinese
                  company.
                </p>
                <p class="tag">Tags:Api, JavaScript, HTML, CSS/SASS</p>
                <p>This website is mobile and desktop compatible.</p>
                <a href="https://github.com/tanglian721/BWDX-VUE" class="github"
                  >View Code</a
                >
              </div>
            </transition>
          </div>
        </slide>
        <slide id="weather" class="portfolio-content">
          <h3 class="title">TLWeather</h3>
          <div class="content">
            <img
              class="img"
              @click="introAppear"
              src="../assets/weather.png"
              alt=""
            />
            <a href="http://tlweather.tk/" class="link">
              <img src="../assets/external-link.png" alt="" />
            </a>
            <transition
              enter-active-class="animate__animated animate__slideInDown"
              leave-active-class="animate__animated animate__slideOutUp"
            >
              <div v-if="if_intro" @click="introAppear" class="intro">
                <h3>TLWeather</h3>
                <div class="splitter"></div>
                <p>
                  TLWeather is a small weather forecast website using Api and
                  JavaScript
                </p>
                <p class="tag">Tags:Api, JavaScript, HTML, CSS/SASS</p>
                <P> TLWeather is mobile compatible.</P>
                <a
                  href="https://github.com/tanglian721/WeatherForecasts"
                  class="github"
                  >View Code</a>
                <div> </div>
              </div>
            </transition>
          </div>
        </slide>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
      </hooper>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide, pagination as HooperPagination } from "hooper";
import {
  Navigation as HooperNavigation
  } from 'hooper';
import "hooper/dist/hooper.css";
export default {
  name: "my-portfolio",
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation
  },
  data() {
    return {
      hooperSettings: {
        autoPlay: true,
        centerMode: true,
        playSpeed: 3000,
        wheelControl: false
      },
      if_intro: false,
      portfolio: [{ img: "../assets/Okotoks Pizza 1.png" }]

    };
  },
  methods: {
    introAppear() {
      this.if_intro = !this.if_intro;
    }
  }
};
</script>

<style lang="scss" scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css);
.desk{
  display: none;
}
.portfolio {
  // background: white;
  width: 90vw;
  height: 90vh;
  margin-left: 5vw;
  bottom: 15vh;
  #title {
    position: absolute;
    color: white;
    right: 0;
    font-family: "Jura", sans-serif;
    font-size: 2rem;
    text-shadow: 1px 1px 5px rgba($color: #000000, $alpha: 1);
  }
  #slider {
    position: relative;
    top: 10vh;
    //  background-color:white;
    width: 100%;
    height: 50vh;
    #frame {
      widows: 100%;
      height: 100%;
      position: relative;
      // padding: 5vw;
      border-radius: 20px;
      // box-sizing: content-box;
      .portfolio-content {
        width: 100%;
        height: 100%;
        background-color: #2f2f2f6c;
        border-radius: 10%;
        padding: 0 3vh;
        .title {
          width: 90%;
          height: 15%;
          top: 2vh;
          position: absolute;
          color: white;
          font-family: "Jura", sans-serif;
          font-size: 1.5rem;
          text-align: center;
          text-shadow: 1px 1px 5px rgba($color: #000000, $alpha: 1);
        }
        .content {
          z-index: 50;
          position: relative;
          top: 15%;
          width: 100%;
          height: 85%;
          overflow: hidden;
          .img {
            z-index: 50;
            position: absolute;
            width: 100%;
          }
          .link {
            z-index: 60;
            position: absolute;
            top: 0;
            right: 0;
            width: 10%;
            height: 8%;
            background-color: #8fa6cb;
            display: grid;
            align-items: center;
            justify-items: center;
            border-radius: 10%;
            box-shadow: 5px 5px 5px gray;
            img {
              position: relative;
              width: 80%;
            }
          }
          .intro {
            z-index: 55;
            position: absolute;
            width: 100%;
            height: 80%;
            background-color: rgba($color: #181818, $alpha: 0.9);
            top: 0;
            color: white;
            display: grid;
            grid-template-rows: 2fr 1fr 3fr 2fr 2fr 1fr 1fr;
            justify-items: center;
            font-family: "Jura", sans-serif;

            .splitter {
              height: 2px;
              width: 90%;
              background: white;
            }
            h3 {
              font-size: 1.5rem;
              justify-self: start;
              align-self: end;
              margin-left: 5%;
            }
            p {
              width: 90%;
            }
            .github {
              z-index: 60;
              background: #d5f9de;
              margin-bottom: 5%;
              padding: 5px 10px;
              color: #8fa6cb;
              border-radius: 5px;
              filter: drop-shadow(1px 1px 5px gray);
            }
          }
        }
      }
    }
  }
}
@media only screen and (min-width: 1366px) {
  .desk{
    display: block;
  }
  .mobile{
    display: none;
  }
  .portfolio {

 bottom: 30vh;
  #title {
    top:55%;
    right: 5vw;
    font-size: 3rem;
  }
  #slider {
    position: relative;
    top: 5vh;
    left:10vw;
    // background-color:white;
    width: 40vw;
    height: 42vw;
    #frame {
      widows: 100%;
      height: 100%;
      position: relative;
      // padding: 5vw;
      border-radius: 20px;
      // box-sizing: content-box;
      .portfolio-content {
        width: 100%;
        height: 100%;
        background-color: #dcf4a700;
        padding: 0;
        
        .title {
          width: 80%;
          margin-left: 10%;
          height: 5%;
          text-align: left;
          top: 0;
          font-size: 2.5rem;
        }
        .content {
          z-index: 50;
          position: relative;
          top: 12%;
          width: 100%;
          height: 95%;
          
          overflow: hidden;
          .img {
            z-index: 50;
            position: absolute;
            width: 100%;
          }
          .link {
            z-index: 60;
            position: absolute;
            top: 0;
            right: 0;
            width: 6%;
            height: 6%;
            background-color: #8fa6cb;
            display: grid;
            align-items: center;
            justify-items: center;
            border-radius: 10%;
            box-shadow: 5px 5px 5px gray;
            img {
              position: relative;
              width: 80%;
            }
          }
          .intro {
            height: 90%;
            grid-template-rows: 2fr 1fr 3fr 2fr 2fr 1fr;
            .splitter {
              height: 2px;
              width: 90%;
              background: white;
            }
            h3 {
              font-size: 3rem;
              justify-self: start;
              align-self: end;
              margin-left: 5%;
            }
            p {
              width: 90%;
              font-size: 2rem;
            }
            .github {
              z-index: 60;
              font-size: 2rem;
              background: #d5f9de;
              margin-bottom: 5%;
              padding: 5px 10px;
              color: #8fa6cb;
              border-radius: 5px;
              filter: drop-shadow(1px 1px 5px gray);
            }
          }
        }
      }
    }
  }
}
}
</style>