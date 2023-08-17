<template>
    <main class="main_container">
        <Sidebar :shown-content="shownContent" @set-content-page="setContentPage" />
        <Content :shown-content="shownContent" />
    </main>
</template>
  
<script setup>
import Sidebar from './Sidebar.vue';
import Content from './Content.vue';
import { ref } from 'vue';

const shownContent = ref('attendance_logs');

/**
 * 
 * @param {*} name 
 */
const setContentPage = (name) => {
    shownContent.value = name;
}
</script>

<style scoped>
@import '../../styles/content/layout.css';
</style>