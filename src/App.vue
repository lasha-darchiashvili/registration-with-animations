<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  watch: {
    $route(to, from) {
      this.$store.state.page = this.$route.path;
    },
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
