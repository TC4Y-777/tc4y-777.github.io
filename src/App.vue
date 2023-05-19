<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue';

import 'animate.css'

</script>

<template>

  <NavBar />

  <div class="router-view-div">
  <router-view v-slot="{ Component }">
    <transition 
    enter-active-class="animate__animated animate__fadeInUp animate__slow" 
    leave-active-class="animate__animated animate__fadeOutUp animate__slow"
    mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
  </div>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->

  <!-- <HelloWorld msg="Hi, This is Ashish" /> -->
  

</template>

<style scoped>

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.router-view-div{
  width: 90vw;
  /* font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400; */
}

</style>
