<template>
  <div class="container">
    <div class="hero">
      <h1 class="name">Cyril Verdad</h1>
      <h2 class="desc">Front-end Developer</h2>
      <form
        action="https://drive.google.com/file/d/1J5pjnyz0API7kuvwqaz1bfN7Eax_8AjJ/preview"
        target="_blank"
        class="resume-form"
      >
        <button class="custom-btn">View Resume</button>
      </form>
      <div class="white-cover"></div>
      <div class="white-cover-secondary"></div>
    </div>
  </div>
  <ModalDialog
    :showModal="showModal"
    @close="showModal = false"
    :content="content"
  />
  <div class="container-2" style="justify-content: flex-start">
    <div class="about">
      <span
        class="about-text"
        :style="`transform: translateX(${checkScroll}px)`"
        >ABOUT ME</span
      >
      <p class="about-desc">
        I’m a front-end web developer with professional experience in creating
        web applications focusing on the minimialist approach
      </p>
    </div>
  </div>
  <div class="project-1">
    <div class="hidden" ref="num_1"></div>
    <Transition name="fade" mode="out-in">
      <div v-if="showProject.shown" class="inner-project">
        <ProjectView
          :ProjectData="checkData"
          :key="projectKey"
          @forceRerender="forceRerender"
          @showPharmfinder="showPharmfinder"
          @showBitnacs="showBitnacs"
        />
      </div>
      <div v-else class="inner-project">
        <span class="contact-text">CONTACT</span>
        <div class="contact-nav">
          <form action="mailto:verdad.cyrilken@gmail.com" target="_blank">
            <button class="contact-button">
              <img
                src="@/assets/images/email.png"
                class="contact-img"
                alt="Send an Email"
                title="Send an Email"
              />
            </button>
          </form>
          <form action="https://github.com/CKVerd" target="_blank">
            <button class="contact-button">
              <img
                src="@/assets/images/github.png"
                class="contact-img"
                alt="Open github @CKVerd"
                title="Open github @CKVerd"
              />
            </button>
          </form>
          <form action="https://www.linkedin.com/in/ckverdad/" target="_blank">
            <button class="contact-button">
              <img
                src="@/assets/images/linkedin.png"
                class="contact-img"
                alt="Open Linkedin @ckverdad"
                title="Open Linkedin @ckverdad"
              />
            </button>
          </form>
        </div>
        <div class="footer">(c) Cyril Verdad 2022</div>
      </div>
    </Transition>
    <img
      src="@/assets/images/pf_1.png"
      :class="'phone-foreground'"
      :style="`top: ${1000 - foregroundScroll}px`"
    />
    <img
      src="@/assets/images/pf_2.png"
      class="phone-background"
      :style="`top: ${700 - backgroundScroll}px`"
      v-if="!isPhone"
    />
    <img
      src="@/assets/images/pf_3.png"
      class="phone-mid"
      :style="`top: ${1700 - midScroll}px`"
      v-if="!isPhone"
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
      v-if="!isPhone"
    />
  </div>
  <div class="container"></div>
  <div class="container" v-if="isPhone"></div>
  <div class="project">
    <div class="hidden-bot" ref="num_3"></div>
    <img
      src="@/assets/images/Bitnacs_1.png"
      class="laptop-background"
      :style="`top: ${2400 - backgroundScroll}px`"
    />
    <img
      src="@/assets/images/Bitnacs_2.png"
      class="phone-background"
      :style="`top: ${4500 - midScroll}px`"
      v-if="!isPhone"
    />
  </div>
  <div class="container"></div>
  <div v-if="is720" class="container"></div>
  <div class="project">
    <div class="hidden-bot" ref="num_4"></div>
    <img
      src="@/assets/images/KK_3.png"
      class="ipad-background"
      :style="`top: ${3300 - backgroundScroll}px`"
      v-if="showProject.shown && !isPhone"
    />
    <img
      src="@/assets/images/KK_2.png"
      class="phone-foreground-1"
      :style="`top: ${4600 - foregroundScroll}px`"
      v-if="showProject.shown"
    />
    <img
      src="@/assets/images/KK_1.png"
      class="laptop-mid"
      :style="`top: ${6700 - midScroll}px`"
      v-if="showProject.shown && !isPhone"
    />
  </div>
  <div class="container"></div>
  <div v-if="isTablet" class="container"></div>
  <div class="project">
    <div class="hidden-bot" ref="num_5"></div>
    <img
      src="@/assets/images/joke_1.png"
      class="laptop-mid"
      :style="`top: ${7600 - midScroll}px`"
      v-if="showProject.shown"
    />
  </div>
  <div class="container"></div>

  <div class="project">
    <div class="hidden-bot" ref="end"></div>
  </div>
</template>

<script>
import ProjectView from "@/components/ProjectView";
import ModalDialog from "@/components/ModalDialog.vue";
import { ref, onMounted, computed } from "vue";

export default {
  components: {
    ProjectView,
    ModalDialog,
  },
  setup() {
    const projectWidth = ref(null);
    const content = ref(null);
    const showModal = ref(false);
    const scrollData = ref(null);
    const scrollValue = ref(0);
    const siteHeight = ref(0);
    const num_1 = ref(null);
    const num_2 = ref(null);
    const num_3 = ref(null);
    const num_4 = ref(null);
    const num_5 = ref(null);
    const end = ref(null);
    const projectKey = ref(0);
    const showProject = ref({
      shown: true,
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
        desc: "An Application for generating one liners or two liner jokes implementing a Jokes API",
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

    const isPhone = computed(() => {
      if (projectWidth.value <= 900) {
        return true;
      } else {
        return false;
      }
    });

        const isTablet = computed(() => {
      if (projectWidth.value <= 1300) {
        return true;
      } else {
        return false;
      }
    });

    const is720 = computed(() => {
      if (siteHeight.value <= 720) {
        return true;
      } else {
        return false;
      }
    });

    function handleScroll() {
      scrollValue.value = window.scrollY;
      siteHeight.value = window.innerHeight;
      projectWidth.value = window.innerWidth;
      // scrollData.value = window.scrollY;
      scrollData.value = scrollValue.value - siteHeight.value - 100;
      // console.log(scrollData.value);
      // scrollData.value = window.scrollY;
      // scrollData.value = (scrollValue + window.innerHeight) / 100;
      console.log(isPhone.value);
      console.log(projectWidth.value)
      if (checkVisible(num_1.value)) {
        showProject.value.shown = true;
        showProject.value.project_1 = true;
      } else {
        // showProject.value.project_1 = false;
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

      if (checkVisible(end.value)) {
        showProject.value.shown = false;
      }
    }

    function forceRerender() {
      projectKey.value += 1;
    }

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

    function showPharmfinder() {
      showModal.value = true;
      content.value = "PharmFinder";
    }

    function showBitnacs() {
      showModal.value = true;
      content.value = "Bitnacs";
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
      handleScroll();
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
      end,
      forceRerender,
      projectKey,
      checkData,
      foregroundScroll,
      backgroundScroll,
      midScroll,
      showModal,
      showPharmfinder,
      isTablet,
      content,
      showBitnacs,
      projectWidth,
      isPhone,
      is720,
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
  height: 100vh !important;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  overflow: hidden;
}

.project-1 {
  width: 100vw;
  height: 100vh !important;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  z-index: 9999 !important;
  overflow: hidden;
}

.name {
  font-family: "Thousand Brights";
  font-size: 164px;
  font-weight: 100;
  animation: from-bottom 0.8s ease-in-out;
  @include breakpoint(mobile) {
    font-size: 75px;
  }
}

.desc {
  font-family: "Bergen Sans Regular";
  font-size: 40px;
  animation: from-bottom 0.8s ease-in-out forwards;
  animation-delay: 0.25s;
  opacity: 0;
  z-index: 2;
  margin-top: -10px;
  @include breakpoint(mobile) {
    font-size: 24px;
    margin-top: 0px;
  }
}

.custom-btn {
  z-index: 2;
  background-color: transparent;
  outline: none;
  border: 2.5px solid $color-text;
  border-radius: 10px;
  padding: 10px;
  font-family: "Bergen Sans Regular";
  font-size: 16px;
  animation: shakeAppear 1.75s ease-in-out forwards;
  animation-delay: 0.8s;
  opacity: 0;
  transition: all 0.4s ease;
  color: black;

  &:hover {
    background-color: $color-text;
    color: white;
    cursor: pointer;
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
  white-space: nowrap;

  @include breakpoint(mobile) {
    font-size: 65px;
  }
}

.contact-text {
  font-family: "Bergen Sans Bold";
  font-size: 200px;
  color: #e6e6e6;
  position: absolute;
  z-index: 1;

  @include breakpoint(mobile) {
    font-size: 72px;
    margin-top: 50px;
  }
  @include breakpoint(tablet) {
    font-size: 200px;
    margin-top: 0px;
  }
  @include breakpoint(laptop) {
    font-size: 250px;
    margin-top: 0px;
  }
  @include breakpoint(desktop) {
    font-size: 250px;
    margin-top: 0px;
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
  position: relative;
  z-index: 1;
}

.phone-foreground {
  width: 17%;
  position: absolute;
  right: 20.75%;

  @include breakpoint("mobile") {
    width: 80%;
    right: -40%;
  }
}

.phone-foreground-1 {
  width: 17%;
  position: absolute;
  right: 24.75%;

  @include breakpoint("mobile") {
    width: 90%;
    right: -30%;
  }
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
  right: 4.5%;
}

.laptop-background {
  width: 43%;
  position: absolute;
  right: 2.5%;

  @include breakpoint("mobile") {
    width: 250%;
    right: -150%;
  }
}

.laptop-mid {
  width: 43%;
  position: absolute;
  right: 2.5%;

  @include breakpoint("mobile") {
    width: 250%;
    right: -150%;
  }
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.contact-nav {
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 25%;
  justify-content: space-around;

  @include breakpoint(mobile) {
    width: 75%;
  }
}

.resume-form {
  margin-top: 15px;
  height: 90px;
}

.contact-button {
  padding: 15px;
  border-radius: 50%;
  outline: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
  &:hover > .contact-img {
    cursor: pointer;
    filter: invert(31%) sepia(7%) saturate(0%) hue-rotate(280deg)
      brightness(99%) contrast(94%);
  }
  @include breakpoint(mobile) {
    padding: 15px;
  }
}

.contact-img {
  width: 50px;
  height: 50px;
  filter: invert(68%) sepia(1%) saturate(0%) hue-rotate(105deg) brightness(95%)
    contrast(91%);
  transition: all 0.4s ease;
  &:hover {
    pointer-events: all;
  }
}

.relative {
  position: relative;
}

.footer {
  width: 100%;
  height: fit-content;
  background-color: #f0f0f0;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  padding: 5px;
  animation: from-bottom 1s ease-in-out;
  font-family: "Bergen Sans Regular";
}
</style>
