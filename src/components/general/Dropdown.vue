<template>
    <div class="filter_dropdown">
        <!-- Dropdown Label (label is hidden when there is no selected item OR dropdown is disabled) -->
        <label class="filter_label"
            v-if="selectedFilter[props.filterData.name] !== '' && checkIfDropownDisablility() === false">
            {{ props.filterData.label }}
        </label>

        <!-- Dropdown Button (button is disabled based on condition from checkIfDropownDisablility) -->
        <button :class="['filter_button', checkIfDropownDisablility() === true ? 'disabled' : '']"
            @click="toggleDropdowns(props.filterData.name)">

            <!-- If there is no selected item, diplay the default text -->
            <!-- <span v-if="filterData.item_list.length > 0"> -->
            <span :class="[selectedFilter[props.filterData.name] === '' ? 'default' : '']">
                {{ selectedFilter[props.filterData.name] === '' ? props.filterData.default :
                    selectedFilter[props.filterData.name] }}
            </span>
            <!-- <span class="default" v-else>{{ `No ${props.filterData.label}` }}</span> -->
            <font-awesome-icon style="color: #c3cdc9;"
                :icon="['fas', currentOpenedDropdown === props.filterData.name ? 'chevron-up' : 'chevron-down']" />

        </button>

        <!-- Dropdown List -->
        <div v-if="currentOpenedDropdown === props.filterData.name" class="filter_list">
            <DropdownItems @close-dropdown="closeDropdownList" :dropdown="props.filterData.name" />
        </div>
    </div>
</template>
  
<script setup>
import { defineEmits, computed } from 'vue';
import { useStore } from 'vuex';
import DropdownItems from '../general/DropdownItems.vue';

const store = useStore();
const emits = defineEmits(['set-open-dropdown']);
const props = defineProps({
    filterData: Object,
    currentOpenedDropdown: String
});

const selectedFilter = computed(() => store.state.filter);
const filterState = computed(() => store.getters.getFilters);

/**
 * Toggle dropdown
 * Close the dropdown list of user clicks the same dropdown
 * @param filterName
 */
const toggleDropdowns = (filterName) => {
    emits('set-open-dropdown', props.currentOpenedDropdown === filterName ? null : filterName);
}

/**
 * Close the dropdown list
 */
const closeDropdownList = () => {
    emits('set-open-dropdown', null);
}

/**
 * Check if dropdown should be disabled based on conditions
 * If department has not been selected, disable location dropdown
 * If location has not been selected, disable employee dropdown
 */
const checkIfDropownDisablility = () => {
    switch (props.filterData.name) {
        case 'location':
            // Location dropdown is disabled when the following conditions are met
            return computed(() => store.getters.getLocationList).value.length === 0 ||
                computed(() => store.getters.getEmployeesWithLocation).value.length === 0 ||
                (computed(() => store.getters.getLocationList).value.length === 0 &&
                    computed(() => store.getters.getEmployeeList).value.length === 0);
        case 'employee':
            // Employee dropdown is disabled when the following conditions are met
            return (computed(() => store.getters.getLocationList).value.length === 0 &&
                computed(() => store.getters.getEmployeeList).value.length === 0) || computed(() => store.getters.getEmployeeList).value.length === 0;
        default:
            return false;
    }
}
</script>

<style scoped>
.filter_dropdown {
    position: relative;
}

.filter_dropdown .filter_button {
    width: 100%;
    cursor: pointer;
}

.filter_dropdown .filter_label {
    position: absolute;
    padding: 0 5px;
    top: -10px;
    left: 9px;
    font-size: 0.8rem;
    background-color: #FFF;
    color: var(--calendar-label);
}

.filter_dropdown .filter_button {
    width: 100%;
    padding: 12px 12px;
    margin-bottom: 15px;
    font-size: 0.9rem;
    display: flex;
    justify-content: space-between;
    background-color: #FFF;
    border-radius: 3px;
    border: 1px solid var(--gray3);
}

.filter_dropdown .filter_button span.default {
    color: var(--gray3);
}

.filter_dropdown .filter_button.disabled {
    width: 100%;
    padding: 12px 12px;
    margin-bottom: 15px;
    font-size: 0.9rem;
    display: flex;
    justify-content: space-between;
    background-color: var(--disabled-dropdown);
    pointer-events: none;
    border-radius: 3px;
    border: 1px solid var(--gray3);
}

.filter_dropdown .filter_list {
    z-index: 99;
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFF;
    top: 42px;
}
</style>