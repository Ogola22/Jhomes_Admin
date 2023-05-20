<script>
import './axios';
import { RouterLink, RouterView } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue'
import LeftSidebarComponent from './components/LeftSidebarComponent.vue'
import RightSidebarComponent from './components/RightSidebarComponent.vue';



export default {
  components: {HeaderComponent, LeftSidebarComponent, RightSidebarComponent},
}
</script>

<template>
  <div>
    <header-component></header-component>

  <left-sidebar-component></left-sidebar-component>
    <RouterView />
  <right-sidebar-component></right-sidebar-component>
</div>
  

</template>

<style>

</style>
