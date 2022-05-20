<template>
  <div class="first-half">
    <div class="fit">
      <h1 class="anim text-semiBold colored">{{ ProjectData.num }}</h1>
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
    </div>
    <div class="fit type">
      <h1 class="anim text-semiBold colored">{{ ProjectData.type }}</h1>
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
  background-color: white;
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
}

.desc {
  margin-top: 20px;
}

.name-text {
  font-size: 64px;

  @include breakpoint(mobile) {
    font-size: 32;
  }
}

.role-text {
  font-size: 36px;
}

.desc-text {
  font-size: 36px;
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
  background-color: $color-text;
  animation: show 1.5s forwards;
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
  background-color: $color-text;
  animation: show 1.5s forwards;
  transform: translateY(-50%);
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
</style>
