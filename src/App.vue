<template>
  <router-view />
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Thousand Brights";
  font-weight: normal;
  src: url("@/assets/fonts/Thousand Brights.otf") format("opentype");
}
@font-face {
  font-family: "Bergen Sans Regular";
  src: url("@/assets/fonts/BergenSans-Regular.otf") format("opentype");
}
@font-face {
  font-family: "Bergen Sans Bold";
  src: url("@/assets/fonts/BergenSans-SemiBold.otf") format("opentype");
}
@font-face {
  font-family: "Bergen Sans Bolder";
  src: url("@/assets/fonts/BergenSans-Bold.otf") format("opentype");
}

html {
  overflow-x: hidden;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

@keyframes from-bottom {
  0% {
    transform: translateY(200px);
    opacity: 0;
  }
  70% {
    transform: translateY(-2px);
    opacity: 1;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
