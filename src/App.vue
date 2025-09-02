<script setup>
import defaultViews from './layout/defaultViews.vue';
import Login from './LoginPage/Login.vue';
import Singup from './LoginPage/Singup.vue';
</script>

<template>
  <!-- <Singup></Singup> -->
  <defaultViews>
    <router-view />
  </defaultViews>
</template>