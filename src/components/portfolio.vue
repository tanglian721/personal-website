<template>
  <div class="portfolio">
    <h2 id="title">portfolio</h2>
    <span id="portfolio"></span>
       <vue-aos animation-class="animate__animated animate__fadeInUp">
    <div id="slider">
      <hooper id="frame" :settings="hooperSettings">
        <slide id="Homedeliciouse" class="portfolio-content">
          <h3 class="title">Home delicious website</h3>
          <div class="content">
            <img
              class="img desk"
              @click="introAppear"
              src="../assets/HomeDelicious-d.png"
              alt=""
            />
            <img
              class="img mobile"
              @click="introAppear"
              src="../assets/HomeDelicious-m.png"
              alt=""
            />
            <a href="https://homedelicious.ml" class="link">
              <img src="../assets/external-link.png" alt="" />
            </a>
            <transition
              enter-active-class="animate__animated animate__slideInDown"
              leave-active-class="animate__animated animate__slideOutUp"
            >
              <div v-if="if_intro" @click="introAppear" class="intro">
                <h3>Home delicious website</h3>
                <div class="splitter"></div>
                <p>
                  Home delicious website is the food(recipe) share website
                </p>
                <p class="tag">Tags: HTML, CSS/SASS, JavaScript, Vue.js, Python, Flask, MariaDB</p>
                <p>Home delicious website is mobile and desktop compatible.</p>
                <a
                  href="https://github.com/tanglian721/home_delicious_frontend.git"
                  class="github"
                  >View Code</a
                >
              </div>
            </transition>
          </div>
        </slide>
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
            <a href="https://tangpizza.tk/" class="link">
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
                  VUE.js and Python.
                </p>
                <p class="tag">Tags:VUE.js, Api, JavaScript, Python, MariaDB,,Flask, HTML, CSS/SASS</p>
                <p>LTweeter is mobile and desktop compatible.</p>
                <a
                  href="https://github.com/tanglian721/tweeter_fronted"
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
                  >View Code</a
                >
                <div></div>
              </div>
            </transition>
          </div>
        </slide>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
      </hooper>
    </div>
       </vue-aos>
    <div id="layFour"></div>
  </div>
</template>

<script>
import { Hooper, Slide, pagination as HooperPagination } from "hooper";
import { Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
import VueAos from 'vue-aos'

export default {
  name: "my-portfolio",
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
    VueAos

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
.desk {
  display: none;
}
.portfolio {
  #layFour {
    z-index: 1;
    position: absolute;
    top: 18vh;
    left: -80vw;
    width: 250vw;
    height: 102vh;
    background: #7d84b2;
    box-shadow: 0px 1px 4px 0px #000000 25%;
    transform: rotate(-20deg);
  }
  width: 90vw;
  height: 90vh;
  margin-left: 5vw;
 #portfolio{
   position: absolute;
   z-index: 37;
   top: 30vh;
 }
  #title {
    z-index: 37;
    position: relative;
    color: white;
    top: 50vh;
    left: 5vw;
    font-family: "Jura", sans-serif;
    font-size: 2rem;
    text-shadow: 1px 1px 5px rgba($color: #000000, $alpha: 1);
  }
  #slider {
    z-index: 37;
    position: relative;
    top: 55vh;
    width: 100%;
    height: 50vh;
    #frame {
      widows: 100%;
      height: 100%;
      position: relative;
      border-radius: 20px;
      .portfolio-content {
        width: 100%;
        height: 100%;
        border-radius: 10%;
        display: grid;
        justify-items: center;
        // padding: 0 3vh;
        .title {
          width: 100%;
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
          width: 80vw;
          height: 71.1vw;
          overflow: hidden;
          .img {
            z-index: 50;
            position: absolute;
            width: 100%;
            height: 100%;
          }
          .link {
            z-index: 60;
            position: absolute;
            top: 1%;
            right: 1%;
            width: 11%;
            height: 12%;
            background-color: #000000;
            display: grid;
            align-items: center;
            justify-items: center;
            border: 1px solid white;
            border-radius: 10%;
            box-shadow: 8px 8px 25px 10px gray;
            img {
              position: relative;
              width: 80%;
            }
          }
          .intro {
            z-index: 55;
            position: absolute;
            width: 100%;
            height: 100%;
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
  .desk {
    display: block;
  }
  .mobile {
    display: none;
  }
  .portfolio {
    bottom: 5vh;
    #layFour {
      top: -13vh;
      left: -80vw;
      height: 150vh;
      transform: rotate(-10deg);
    }
    #title {
      top: 70vh;
      left: 70vw;
      font-size: 3rem;
    }
    #slider {
      position: absolute;
      top: 40vh;
      left: 10vw;
      // background-color:white;
      width: 42vw;
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
            text-align: center;
            top: 0;
            font-size: 2rem;
          }
          .content {
            z-index: 50;
            position: relative;
            top: 12%;
            width: 80%;
            height: 71.1%;

            overflow: hidden;
            .img {
              z-index: 50;
              position: absolute;
              
            }
            .link {
              z-index: 60;
              position: absolute;
              top: 1%;
              right: 1%;
              width: 7%;
              height: 8%;
              display: grid;
              align-items: center;
              justify-items: center;
              border-radius: 10%;
              img {
                position: relative;
                width: 80%;
              }
            }
            .intro {
              grid-template-rows: 2fr 1fr 3fr 2fr 2fr 1fr;
              .splitter {
                height: 2px;
                width: 90%;
                background: white;
              }
              h3 {
                font-size: 2rem;
                justify-self: start;
                align-self: end;
                margin-left: 5%;
              }
              p {
                width: 90%;
                font-size: 1.5rem;
              }
              .github {
                z-index: 60;
                font-size: 1.5rem;
                background: #d5f9de;
                margin-bottom: 5%;
                padding: 5px 10px;
                color: black;
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