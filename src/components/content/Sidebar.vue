<template>
    <section class="sidebar">
        <!-- Sidebar Header -->
        <div class="sidebar_section sidebar_header">
            <h1 class="sidebar_header_title">Manage Attendance</h1>
            <p class="sidebar_header_description">Attendance management is where you can generate, add, edit, and export the
                logs of the
                employees.</p>
            <div class="sidebar_header_actions">
                <button :class="['button', props.shownContent === 'attendance_logs' ? 'active' : '']"
                    @click="setContentPage('attendance_logs')">
                    <font-awesome-icon icon="fa-regular fa-calendar" style="color: #20ad49;" />
                    <span>Attendance Logs</span>
                </button>
                <br>
                <button :class="['button', props.shownContent === 'exported_files' ? 'active' : '']"
                    @click="setContentPage('exported_files')">
                    <font-awesome-icon icon="fa-solid fa-download" />
                    <span>Exported Files</span>
                </button>
            </div>
        </div>

        <!-- Sidebar Filters -->
        <div class="sidebar_section sidebar_filter">
            <div class="sidebar_filter_date">
                <h4 class="sidebar_filter_date_title">DATE RANGE</h4>
                <DatePicker :date="new Date()" label="Date From" />
                <DatePicker :date="new Date()" label="Date To" />
            </div>
            <div class="sidebar_filter_dropdown">
                <!-- Sidebar filter header -->
                <div class="sidebar_filter_dropdown_header">
                    <h4 class="sidebar_filter_dropdown_title">FILTERS</h4>
                    <h4 class="sidebar_filter_dropdown_show_button" @click="showDropdowns = !showDropdowns">
                        {{ showDropdowns === true ? 'Hide All' : 'Show All' }}
                    </h4>
                </div>

                <!-- Selected values from filters (displayed by default base on showDropdowns) -->
                <div class="sidebar_filter_dropdown_filters" v-if="!showDropdowns">
                    <div class="selected_filter">
                        <span class="icon"><font-awesome-icon icon="fa-regular fa-building" /></span>
                        <span class="name">{{ selectedFilter.company }}</span>
                    </div>
                    <div class="selected_filter">
                        <span class="icon"><font-awesome-icon icon="fa-solid fa-users" /></span>
                        <span class="name">{{ selectedFilter.department }}</span>
                    </div>
                    <div class="selected_filter">
                        <span class="icon"><font-awesome-icon icon="fa-solid fa-location-dot" /></span>
                        <span class="name">{{ selectedFilter.location }}</span>
                    </div>
                    <div class="selected_filter">
                        <span class="icon"><font-awesome-icon icon="fa-regular fa-user" /></span>
                        <span class="name">{{ selectedFilter.employee }}</span>
                    </div>
                </div>

                <!-- All Dropdown list (all dropdowns are hidden based on showDropdowns) -->
                <div class="sidebar_filter_dropdown_filters" v-else>
                    <Dropdown v-for="(filter, key) in filterList" :key="key"
                        :current-opened-dropdown="currentOpenedDropdown" :filter-data="filter"
                        @set-open-dropdown="setOpenDropdown" />
                </div>
            </div>
        </div>

        <!-- Sidebar Actions buttons -->
        <div class="sidebar_section sidebar_action">
            <button class="sidebar_action_button active">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />Search
            </button>
            <button class="sidebar_action_button">
                <font-awesome-icon icon="fa-solid fa-download" />Export
            </button>
        </div>
    </section>
</template>
  
<script setup>
import { ref, computed, defineEmits, defineProps } from 'vue';
import { useStore } from 'vuex';
import { filterList } from '../../data';
import DatePicker from '../general/DatePicker.vue';
import Dropdown from '../general/Dropdown.vue';

const store = useStore();
const emits = defineEmits(['set-content-page']);
const props = defineProps({
    shownContent: String
});
const showDropdowns = ref(false);
const currentOpenedDropdown = ref(null);
const selectedFilter = computed(() => store.getters.getFilters);

/**
 * 
 * @param {*} name 
 */
const setContentPage = (name) => {
    emits('set-content-page', name)
}
/**
 * Set the opened dropdown onclick and close others
 * @param {*} dropdownName 
 */
const setOpenDropdown = (dropdownName) => {
    currentOpenedDropdown.value = dropdownName;
}
</script>

<style scoped>
@import '../../styles/content/sidebar.css';
</style>