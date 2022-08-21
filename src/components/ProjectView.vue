<template>
  <div class="first-half">
    <div class="fit">
      <h1 class="anim num-text text-semiBold colored">{{ ProjectData.num }}</h1>
    </div>
    <div class="info-container">
      <div class="fit name">
        <h1 class="anim name-text text-bolder colored">
          {{ ProjectData.name }}
        </h1>
      </div>
      <div class="fit role">
        <h2 class="anim role-text text-semiBold colored">
          {{ ProjectData.roles }}
        </h2>
      </div>
      <div class="fit desc">
        <p class="p-anim desc-text text-regular colored">
          {{ ProjectData.desc }}
        </p>
      </div>
      <div class="anim btn-row">
        <button
          v-if="ProjectData.num === '01'"
          class="custom-btn"
          @click="$emit('showPharmfinder')"
        >
          View Prototype
        </button>
        <form
          v-if="ProjectData.num === '01'"
          action="https://drive.google.com/file/d/1zgMEKzBljroB1FTooLODk98Cj-HapRrY/view?usp=sharing"
          target="_blank"
        >
          <button class="custom-btn">Download APK</button>
        </form>
        <form
          v-if="ProjectData.num === '02'"
          action="https://apps-pappannualconvention2022.com/#/"
          target="_blank"
        >
          <button class="custom-btn">View Website</button>
        </form>
        <button
          v-if="ProjectData.num === '03'"
          class="custom-btn"
          @click="$emit('showBitnacs')"
        >
          View Mockup
        </button>
        <form
          v-if="ProjectData.num === '04'"
          action="https://kkrafted.netlify.com"
          target="_blank"
        >
          <button class="custom-btn">View Website</button>
        </form>
        <form
          v-if="ProjectData.num === '05'"
          action="https://jkgen.netlify.com"
          target="_blank"
        >
          <button class="custom-btn">View Website</button>
        </form>
      </div>
    </div>
    <div class="fit type">
      <h1 class="anim num-text text-semiBold colored">
        {{ ProjectData.type }}
      </h1>
    </div>
  </div>
</template>

<script>
import { watch, computed } from "vue";
export default {
  props: {
    ProjectData: Object,
  },
  setup(props, { emit }) {
    // const isChanged = ref(false);
    // const instance = getCurrentInstance();
    const ProjectObject = computed(() => {
      return props.ProjectData;
    });

    watch(ProjectObject, () => {
      // console.log("this runs")
      emit("forceRerender");
    });

    // onMounted(()=>{
    //     console.log(props.ProjectData)
    // })

    // const isChanged = computed(() => {
    //   return props.ProjectData;
    // });
    return {};
  },
};
</script>

<style lang="scss" scoped>
.first-half {
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  background-color: transparent;

  @include breakpoint(mobile) {
    width: 100%;
  }
}
.text-semiBold {
  font-family: "Bergen Sans Bold";
}

.text-regular {
  font-family: "Bergen Sans Regular";
}
.text-bolder {
  font-family: "Bergen Sans Bolder";
}

.colored {
  color: $color-text;
}

.info-container {
  margin-left: 5%;
}

.name {
  margin-top: 20px;
}

.role {
  margin-top: 60px;

  @include breakpoint(mobile) {
    margin-top: 10px;
  }
}

.desc {
  margin-top: 20px;
}

.name-text {
  font-size: 64px;

  @include breakpoint(mobile) {
    font-size: 32px;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(2px);
  }
  @include breakpoint(tablet) {
    font-size: 52px;
  }
}

.role-text {
  font-size: 36px;

  @include breakpoint(mobile) {
    font-size: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(2px);
  }
  @include breakpoint(tablet) {
    font-size: 32px;
  }
}

.desc-text {
  font-size: 36px;

  @include breakpoint(mobile) {
    font-size: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(2px);
  }
  @include breakpoint(tablet) {
    font-size: 32px;
  }
}

.num-text {
  @include breakpoint(mobile) {
    font-size: 22px;
  }
}

.type {
  margin-top: auto;
}

.anim {
  position: relative;
}

.anim::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  top: 50%;
  background-color: $color-text;
  animation: show 1.5s forwards;
  transform: translate(0%, -50%);
}

.p-anim {
  position: relative;
}

.p-anim::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  top: 50%;
  background-color: $color-text;
  animation: show 1.5s forwards;
  transform: translate(0%, -50%);
}

.fit {
  width: fit-content;
  height: fit-content;
}
@keyframes show {
  20% {
    left: 0;
    width: 100%;
  }
  65% {
    left: 100%;
    width: 1%;
  }
  100% {
    width: 0%;
  }
}

.btn-row {
  display: flex;
  flex-direction: row;
  width: fit-content;
  // background-color: red;
  justify-content: space-between;
  margin-top: 20px;
  gap: 20px;
}

.custom-btn {
  background-color: transparent;
  outline: none;
  border: 2.5px solid $color-text;
  border-radius: 10px;
  padding: 10px;
  font-family: "Bergen Sans Regular";
  font-size: 16px;
  transition: all 0.4s ease;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(2px);
  &:hover {
    background-color: $color-text;
    color: white;
    cursor: pointer;
  }
}
</style>
