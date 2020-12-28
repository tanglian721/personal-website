<template>
  <div class="project">
    <logo-div />
    <div class="project-area">
        <project-div
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
    </div>
  </div>
</template>

<script>
import logoDiv from "../components/logoDiv.vue";
import axios from "axios";
import ProjectDiv from "../components/projectDiv.vue";
export default {
  components: { logoDiv, ProjectDiv },
  data() {
    return {
      projects: [],
    };
  },
  props: {
    project: {
      type: Object,
    },
  },
  methods: {
    getProjects() {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/project",
          method: "get",
        })
        .then((response) => {
          console.log(response.data);
          this.projects = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getProjects();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/style.scss";

.project {
  width: 100vw;
  min-height: 160vh;
  position: relative;
  background-color: black;
  padding-bottom: 10vh;
  .project-area {
    position: relative;
    width: 80%;
    margin-left: 10%;
    color: white;
    padding-top: 8em;
    display: grid;
    row-gap: 3em;
    transition: transform 0.4s ease-in-out;
  }
}
@media only screen and (min-width: 1024px) {

}
</style>