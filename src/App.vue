<template>
  <MainLayout>
    <!-- Navigation -->
    <template v-slot:navigation>
      <NavigationBar />
    </template>

    <!-- Content (Sidebar and Logs list) -->
    <template v-slot:content>
      <main class="main_container">
        <Sidebar :shown-content="shownContent" @set-content-page="setContentPage" />
        <Content :shown-content="shownContent" />
      </main>
    </template>
  </MainLayout>
</template>

<script setup>
import { ref } from 'vue';
import NavigationBar from './components/general/NavigationBar.vue';
import MainLayout from './components/layout/MainLayout.vue';
import Sidebar from './components/content/Sidebar.vue';
import Content from './components/content/Content.vue';

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
@import './styles/layout/main-layout.css';
</style>