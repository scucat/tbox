<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
// 可以直接从.tsx 或者 .vue 导入组件
import demo2 from './demo/demo2.vue';
import demo1 from './demo/demo1';
console.log("[App.vue]", `Hello world from Electron ${process.versions.electron}!`)
</script>

<template>
  <RouterView/>
</template>

<style>
html,body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
}
</style>
