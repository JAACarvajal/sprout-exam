<template>
    <SidebarLayout>
        <!-- Sidebar Header -->
        <template v-slot:header>
            <SidebarHeader :shown-content="props.shownContent" @set-content-page="setContentPage" />
        </template>

        <!-- Sidebar Filters (show only when attendance logs is selected) -->
        <template v-slot:filters>
            <Filters :show-dropdowns="showDropdowns" v-if="props.shownContent === 'attendance_logs'" />
        </template>

        <!-- Sidebar Actions buttons (show only when attendance logs is selected) -->
        <template v-slot:actions>
            <ActionButtons v-if="props.shownContent === 'attendance_logs'" />
        </template>
    </SidebarLayout>
</template>
  
<script setup>
import SidebarHeader from '../general/Sidebar/Header.vue';
import Filters from '../general/Sidebar/Filters.vue';
import ActionButtons from '../general/Sidebar/ActionButtons.vue';
import SidebarLayout from '../layout/SidebarLayout.vue';

const emits = defineEmits(['set-content-page']);
const props = defineProps({
    shownContent: String
});

/**
 * Emits event and set the opened content page (attendance or exported file)
 * @param {*} name 
 */
const setContentPage = (name) => {
    emits('set-content-page', name)
}
</script>

<style>
@import '../../styles/content/sidebar.css';
</style>