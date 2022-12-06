<template>
  <div
    class="bg-grayZ relative w-full h-screen flex flex-col items-center pt-[27rem]"
  >
    <div
      class="absolute flex flex-col items-center w-fit h-fit pl-[17.8rem] pr-[17.8rem] pt-[8.1rem] pb-[8rem]"
    >
      <img
        src="../assets/Rlogo.svg"
        class="animate-Rlogo leading-[3rem] w-[10rem]"
        alt=""
      />
    </div>
    <div class="pointer z-10 showElement" @click="nextPageAnimationTrigger">
      <router-link to="/identification">
        <p
          class="tracking-[0.1rem] font-bold text-[3rem] w-[20rem] text-center mt-[20rem]"
        >
          კითხვარის დაწყება
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      elementVisible: false,
    };
  },
  mounted() {
    // setTimeout(() => (this.elementVisible = true), 1000);
  },
  methods: {
    nextPageAnimationTrigger() {
      this.$store.commit("setPageTwoPath", "welcome");
    },
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.showElement {
  animation: fade-image 2s forwards;
}

@keyframes fade-image {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
