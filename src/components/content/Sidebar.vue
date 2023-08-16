<template>
    <section class="sidebar">
        <div class="sidebar_section sidebar_header">
            <h1 class="sidebar_header_title">Manage Attendance</h1>
            <p class="sidebar_header_description">Attendance management is where you can generate, add, edit, and export the
                logs of the
                employees.</p>
            <div class="sidebar_header_actions">
                <button class="button active">
                    <font-awesome-icon icon="fa-regular fa-calendar" style="color: #20ad49;" />
                    <span>Attendance Logs</span>
                </button>
                <br>
                <button class="button">
                    <font-awesome-icon icon="fa-solid fa-download" />
                    <span>Exported Files</span>
                </button>
            </div>
        </div>
        <div class="sidebar_section sidebar_filter">
            <div class="sidebar_filter_date">
                <h4 class="sidebar_filter_date_title">DATE RANGE</h4>
                <DatePicker :date="new Date()" label="Date From" />
                <DatePicker :date="new Date()" label="Date To" />
            </div>
            <div class="sidebar_filter_dropdown">
                <div class="sidebar_filter_dropdown_header">
                    <h4 class="sidebar_filter_dropdown_title">FILTERS</h4>
                    <h4 class="sidebar_filter_dropdown_show_button" @click="showDropdowns = !showDropdowns">Show All</h4>
                </div>
                <div class="sidebar_filter_dropdown_filters" v-if="!showDropdowns">
                    <div class="selected_filter">
                        <span class="icon"><font-awesome-icon icon="fa-regular fa-building" /></span>
                        <span class="name">SPROUT SOLUTIONS</span>
                    </div>
                    <div class="selected_filter">
                        <span class="icon"><font-awesome-icon icon="fa-solid fa-users" /></span>
                        <span class="name">ALL</span>
                    </div>
                    <div class="selected_filter">
                        <span class="icon"><font-awesome-icon icon="fa-solid fa-location-dot" /></span>
                        <span class="name">ALL</span>
                    </div>
                    <div class="selected_filter">
                        <span class="icon"><font-awesome-icon icon="fa-regular fa-user" /></span>
                        <span class="name">ALL</span>
                    </div>
                </div>

                <div class="sidebar_filter_dropdown_filters" v-else>
                    <Dropdown />
                    <Dropdown />
                    <Dropdown />
                    <Dropdown />
                </div>
            </div>
        </div>
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
import { ref } from 'vue';
import dayjs from 'dayjs';
import DatePicker from '../general/DatePicker.vue';
import Dropdown from '../general/Dropdown.vue';

const showDropdowns = ref(false);
</script>

<style scoped>
@import '../../styles/content/sidebar.css';
</style>