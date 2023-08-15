<template>
    <main class="main_container">
        <Sidebar />
        <Content />
    </main>
</template>
  
<script setup>
import Sidebar from './Sidebar.vue';
import Content from './Content.vue';
</script>

<style scoped>
@import '../../styles/content/Layout/index.css';
</style>