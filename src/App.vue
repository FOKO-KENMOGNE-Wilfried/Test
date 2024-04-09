<script setup>

  import { ref } from "vue"
  import { RouterView } from "vue-router"
  import LeftNavbar from "./components/LeftNavbar.vue"

  const container = ref("container")
  

</script>

<template>
  <div :class="container">
    <LeftNavbar />
    <RouterView />
  </div>
</template>

<style scoped>

  .container{
    display: flex;
    flex-direction: columns;
    gap: 20px;
  }

</style>
