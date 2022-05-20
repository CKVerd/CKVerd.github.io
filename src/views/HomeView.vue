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
        experience in creating web applications focusing on the minimialist
        approach
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
      :style="`top: ${500 - backgroundScroll}px`"
    />
    <img
      src="@/assets/images/pf_3.png"
      class="phone-mid"
      :style="`top: ${1600 - midScroll}px`"
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
  <div class="project">
    <div class="hidden-bot" ref="num_5"></div>
  </div>
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
    const scrollValue = ref(0);
    const siteHeight = ref(0);
    const num_1 = ref(null);
    const num_2 = ref(null);
    const num_3 = ref(null);
    const num_4 = ref(null);
    const num_5 = ref(null);
    const projectKey = ref(0);
    const showProject = ref({
      shown: false,
      project_1: false,
      project_2: false,
      project_3: false,
      project_4: false,
      project_5: false,
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
        desc: "Mock Landing Page and Catalog view for the business Kuriously Krafted",
        type: "Web Application",
      },
      {
        num: "05",
        name: "Joke Generator",
        roles: "Developer · UI Designer",
        desc: "An Application for generating one liners or two liner jokes implementing a Jokes API WALA PA PICTURE",
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
      }
      if (showProject.value.project_5) {
        return ProjectData.value[4];
      } else {
        return {};
      }
    });

    function handleScroll() {
      scrollValue.value = window.scrollY;
      siteHeight.value = window.innerHeight;
      // scrollData.value = window.scrollY;
      scrollData.value = scrollValue.value - siteHeight.value - 100;
      // console.log(scrollData.value);
      console.log(window.innerHeight);
      // scrollData.value = window.scrollY;
      // scrollData.value = (scrollValue + window.innerHeight) / 100;

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
        // console.log("this runs");
        showProject.value.project_1 = false;
        showProject.value.project_2 = false;
        showProject.value.project_3 = false;
        showProject.value.project_4 = true;
      } else {
        showProject.value.project_4 = false;
      }

      if (checkVisible(num_5.value)) {
        showProject.value.project_1 = false;
        showProject.value.project_2 = false;
        showProject.value.project_3 = false;
        showProject.value.project_4 = false;
        showProject.value.project_5 = true;
      } else {
        showProject.value.project_5 = false;
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
      if (scrollValue.value > 200 && scrollValue.value < 400) {
        return (scrollValue.value - 300) * 0.55;
      } else if (scrollValue.value >= 344) {
        if (siteHeight.value <= 900) {
          return 20;
        } else {
          return 42.5;
        }
      } else {
        return -200;
      }
    });

    const foregroundScroll = computed(() => {
      if (siteHeight.value <= 1000) {
        return 0.55 * scrollData.value + 400;
      }
      return 0.55 * scrollData.value;
    });

    const backgroundScroll = computed(() => {
      if (siteHeight.value <= 1000) {
        return 0.4 * scrollData.value + 400;
      }
      return 0.4 * scrollData.value;
    });

    const midScroll = computed(() => {
      if (siteHeight.value <= 1000) {
        return 0.75 * scrollData.value + 800;
      }
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
      num_5,
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
  @include breakpoint(mobile) {
    font-size: 75px;
  }
}

.desc {
  font-family: "Bergen Sans Regular";
  font-size: 40px;
  animation: from-bottom 1.75s ease-in-out forwards;
  opacity: 0;
  z-index: 2;
  @include breakpoint(mobile) {
    font-size: 24px;
  }
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
  @include breakpoint(mobile) {
    bottom: -175px;
  }
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

  @include breakpoint(mobile) {
    font-size: 65px;
  }
}

.about-desc {
  font-family: "Bergen Sans Regular";
  font-size: 40px;
  z-index: 2;
  padding-left: 30%;

  @include breakpoint(mobile) {
    font-size: 24px;
    padding-left: 0%;
    text-align: center;
  }
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
  width: 17%;
  position: absolute;
  right: 20%;
}

.phone-foreground-1 {
  width: 17%;
  position: absolute;
  right: 24.75%;
}

.phone-background {
  width: 14%;
  position: absolute;
  right: 5.5%;
}

.ipad-background {
  width: 28%;
  position: absolute;
  right: 5.5%;
}

.phone-mid {
  width: 16%;
  position: absolute;
  right: 7.5%;
}

.laptop-background {
  width: 43%;
  position: absolute;
  right: 2.5%;
}

.laptop-mid {
  width: 43%;
  position: absolute;
  right: 2.5%;
}

.phone-horizontal {
  width: 32%;
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
