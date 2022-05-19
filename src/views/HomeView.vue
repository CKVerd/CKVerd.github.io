<template>
  <div class="container">
    <div class="hero">
      <h1 class="name">Cyril Verdad</h1>
      <h2 class="desc">Front-end Developer</h2>
      <div class="white-cover"></div>
      <div class="white-cover-secondary"></div>
    </div>
  </div>
  <div class="container-2" style="justify-content: flex-start">
    <div class="about">
      <span
        class="about-text"
        :style="`transform: translateX(${checkScroll}px)`"
        >ABOUT ME</span
      >
      <p class="about-desc">
        I’m a front-end web developer with over 8 months of professional
        experience in creating web applications focusing on the
        minimialist approach
      </p>
    </div>
  </div>
  <div class="project">
    <div class="hidden" ref="num_1"></div>
    <div v-if="showProject.shown" class="inner-project">
      <ProjectView
        :ProjectData="checkData"
        :key="projectKey"
        @forceRerender="forceRerender"
      />
    </div>
    <img
      src="@/assets/images/pf_1.png"
      class="phone-foreground"
      :style="`top: ${700 - foregroundScroll}px`"
    />
    <img
      src="@/assets/images/pf_2.png"
      class="phone-background"
      :style="`top: ${1000 - backgroundScroll}px`"
    />
    <img
      src="@/assets/images/pf_3.png"
      class="phone-mid"
      :style="`top: ${2000 - midScroll}px`"
    />
  </div>
  <div class="container"></div>
  <div class="project">
    <div class="hidden-bot" ref="num_2"></div>
    <img
      src="@/assets/images/PAPP_1.png"
      class="laptop-background"
      :style="`top: ${1600 - backgroundScroll}px`"
    />
    <img
      src="@/assets/images/PAPP_2.png"
      class="phone-horizontal"
      :style="`top: ${3450 - midScroll}px`"
    />
  </div>
  <div class="container"></div>
  <div class="project">
    <div class="hidden-bot" ref="num_3"></div>
    <img
      src="@/assets/images/Bitnacs_2.png"
      class="phone-background"
      :style="`top: ${5000 - midScroll}px`"
    />
    <img
      src="@/assets/images/Bitnacs_1.png"
      class="laptop-background"
      :style="`top: ${2400 - backgroundScroll}px`"
    />
  </div>
  <div class="container"></div>
  <div class="project">
    <div class="hidden-bot" ref="num_4"></div>
        <img
      src="@/assets/images/KK_3.png"
      class="ipad-background"
      :style="`top: ${3200 - backgroundScroll}px`"
    />
    <img
      src="@/assets/images/KK_2.png"
      class="phone-foreground-1"
      :style="`top: ${4700 - foregroundScroll}px`"
    />
        <img
      src="@/assets/images/KK_1.png"
      class="laptop-mid"
      :style="`top: ${6700 - midScroll}px`"
    />
  </div>
  <div class="container"></div>
  <div class="container"></div>
</template>

<script>
import ProjectView from "@/components/ProjectView";
import { ref, onMounted, computed } from "vue";
export default {
  components: {
    ProjectView,
  },
  setup() {
    const scrollData = ref(null);
    const num_1 = ref(null);
    const num_2 = ref(null);
    const num_3 = ref(null);
    const num_4 = ref(null);
    const projectKey = ref(0);
    const showProject = ref({
      shown: false,
      project_1: false,
      project_2: false,
      project_3: false,
    });
    const ProjectData = ref([
      {
        num: "01",
        name: "PharmFinder",
        roles: "Lead Developer · UI Designer",
        desc: "An application which locates near pharmacies and provides one-way communication via SMS",
        type: "Android App",
      },
      {
        num: "02",
        name: "PAPP 2022",
        roles: "Front-end Developer",
        desc: "Microsite event for the annual convention of the Philippine Academy of Pediatric Pulmonologist",
        type: "Web Application",
      },
      {
        num: "03",
        name: "Bitnacs Landing Page + Blog",
        roles: "Wordpress Developer · UI Designer ",
        desc: "Landing Page for Bitnacs Inc. Inclusive of Contact Pages and Blog Posts",
        type: "Web Application",
      },
      {
        num: "04",
        name: "Kuriously Krafted",
        roles: "Developer · UI Designer",
        desc: "Mock Landing Page for the business Kuriously Krafted",
        type: "Web Application",
      },
    ]);

    const checkData = computed(() => {
      if (showProject.value.project_1) {
        return ProjectData.value[0];
      }
      if (showProject.value.project_2) {
        return ProjectData.value[1];
      }
      if (showProject.value.project_3) {
        return ProjectData.value[2];
      }
      if (showProject.value.project_4) {
        return ProjectData.value[3];
      } else {
        return {};
      }
    });

    function handleScroll() {
      scrollData.value = window.scrollY;
      // console.log(scrollData.value);
      if (checkVisible(num_1.value)) {
        showProject.value.shown = true;
        showProject.value.project_1 = true;
      } else {
        showProject.value.project_1 = false;
      }

      if (checkVisible(num_2.value)) {
        showProject.value.project_1 = false;
        showProject.value.project_2 = true;
      } else {
        showProject.value.project_2 = false;
      }

      if (checkVisible(num_3.value)) {
        showProject.value.project_1 = false;
        showProject.value.project_2 = false;
        showProject.value.project_3 = true;
      } else {
        showProject.value.project_3 = false;
      }

      if (checkVisible(num_4.value)) {
        showProject.value.project_1 = false;
        showProject.value.project_2 = false;
        showProject.value.project_3 = false;
        showProject.value.project_4 = true;
      } else {
        showProject.value.project_4 = false;
      }
    }

    function forceRerender() {
      // console.log("force render");
      projectKey.value += 1;
    }

    // function checkScroll() {
    //   if (scrollData.value > 200 && scrollData.value < 300) {
    //     console.log("this runs")
    //     return scrollData.value * 0.25;
    //   } else {
    //     return 0;
    //   }
    // }
    function checkVisible(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    const checkScroll = computed(() => {
      if (scrollData.value > 150 && scrollData.value < 344) {
        return (scrollData.value - 310) * 1.25;
      } else if (scrollData.value >= 344) {
        return 42.5;
      } else {
        return -200;
      }
    });

    const foregroundScroll = computed(() => {
      return 0.55 * scrollData.value;
    });

    const backgroundScroll = computed(() => {
      return 0.4 * scrollData.value;
    });

    const midScroll = computed(() => {
      return 0.75 * scrollData.value;
    });

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    return {
      scrollData,
      checkScroll,
      num_1,
      showProject,
      ProjectData,
      num_2,
      num_3,
      num_4,
      forceRerender,
      projectKey,
      checkData,
      foregroundScroll,
      backgroundScroll,
      midScroll,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container-2 {
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
}

.project {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
}

.name {
  font-family: "Thousand Brights";
  font-size: 164px;
  font-weight: 100;
  animation: from-bottom 1s ease-in-out;
}

.desc {
  font-family: "Bergen Sans Regular";
  font-size: 40px;
  animation: from-bottom 1.75s ease-in-out forwards;
  opacity: 0;
  z-index: 2;
}

.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.white-cover {
  position: absolute;
  background-color: white;
  height: 200px;
  bottom: -160px;
  width: calc(100% + 50px);
  z-index: 1;
}

.white-cover-secondary {
  background-color: white;
  height: 200px;
  width: 100%;
  position: absolute;
  z-index: 3;
  bottom: -210px;
}

.about {
  display: flex;
  position: relative;
  align-items: center;
  width: 90%;
}

.about-text {
  font-family: "Bergen Sans Bold";
  font-size: 250px;
  color: #e6e6e6;
  position: absolute;
  z-index: 1;
  transform: translateX(-200px);
  transition: 1s;
  transition-delay: 50ms;
}

.about-desc {
  font-family: "Bergen Sans Regular";
  font-size: 40px;
  z-index: 2;
  padding-left: 30%;
}

.hidden {
  width: 10px;
  height: 10px;
}

.hidden-bot {
  width: 10px;
  height: 10px;
  margin-top: auto;
  margin-bottom: 100px;
  // background-color: red;
  // z-index: 999;
}
.inner-project {
  width: 100%;
  height: 100%;
  padding: 5% 5%;
  // animation: fade-in 0.6s ease-in;
}

.phone-foreground {
  width: 320px;
  position: absolute;
  right: 20%;
}

.phone-foreground-1 {
    width: 320px;
  position: absolute;
  right: 25.5%;
}

.phone-background {
  width: 250px;
  position: absolute;
  right: 5.5%;
}

.ipad-background {
  width: 500px;
  position: absolute;
  right: 5.5%;
}

.phone-mid {
  width: 350px;
  position: absolute;
  right: 20%;
}

.laptop-background {
  width: 800px;
  position: absolute;
  right: 2.5%;
}

.laptop-mid {
  width: 600px;
  position: absolute;
  right: 2.5%;
}

.phone-horizontal {
  width: 600px;
  position: absolute;
  right: 7.5%;
}
// .project-enter-from,
// .project-leave-to {

// }

// .project-enter-to,
// .project-leave-from {

// }

// .project-enter-active,
// .project-leave-active {
//   transition: all 0.4s ease;
// }
</style>
