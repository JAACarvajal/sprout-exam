<template>
    <div class="sidebar_section sidebar_filter">
        <div class="sidebar_filter_date">
            <h4 class="sidebar_filter_date_title">DATE RANGE</h4>
            <DatePicker date-type="date_from" label="Date From" />
            <DatePicker date-type="date_to" label="Date To" />
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
                <Dropdown v-for="(filter, key) in filterList" :key="key" :current-opened-dropdown="currentOpenedDropdown"
                    :filter-data="filter" @set-open-dropdown="setOpenDropdown" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { filterList } from '../../../data';
import DatePicker from '../../general/DatePicker.vue';
import Dropdown from '../../general/Dropdown.vue';

const emits = defineEmits(['set-content-page']);
const store = useStore();
const showDropdowns = ref(false);
const currentOpenedDropdown = ref(null);
const selectedFilter = computed(() => store.getters.getFilters);

/**
 * Set the opened dropdown onclick and close others
 * @param {*} dropdownName 
 */
const setOpenDropdown = (dropdownName) => {
    currentOpenedDropdown.value = dropdownName;
}
</script>