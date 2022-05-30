<template>
  <transition name="fade">
    <div v-if="dialog" class="modal" @click="$emit('close')">
      <div class="card">
        <iframe
          v-if="shownContent === 'PharmFinder'"
          style="border: 1px solid rgba(0, 0, 0, 0.1)"
          width="100%"
          height="100%"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9EgPSD5f1xUwhsH5CxsMDi%2FPharmFinder%3Fpage-id%3D0%253A1%26node-id%3D2%253A2%26viewport%3D718%252C477%252C0.37%26scaling%3Dmin-zoom%26starting-point-node-id%3D2%253A2"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </transition>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    showModal: Boolean,
    content: String,
  },
  setup(props) {
    const dialog = computed(() => {
      return props.showModal;
    });
    const shownContent = computed(() => {
      return props.content;
    });
    return {
      dialog,
      shownContent,
    };
  },
};
</script>

<style lang="scss" scoped>
.modal {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  z-index: 9999999 !important;
  display: grid;
  place-items: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.card {
  background-color: black;
  width: 35%;
  height: 99vh;
  display: grid;
  place-items: center;
}

iframe {
    zoom: 0.75;
}
</style>
