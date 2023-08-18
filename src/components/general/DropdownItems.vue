<template>
    <div class="filter_item" @click="updateSelectedItem('All')">
        <p>All</p>
    </div>
    <div v-for="(item, key) in getDropdownList()" :key="key" class="filter_item" @click="updateSelectedItem(item.name)">
        <p>{{ item.name }}</p>
    </div>
</template>
  
<script setup>
import { defineProps, defineEmits, computed, watch } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
    dropdown: String
});
const store = useStore();
const emits = defineEmits(['close-dropdown']);

/**
 * Get the dropdown item list from store
 */
const getDropdownList = () => {
    switch (props.dropdown) {
        case 'company':
            return computed(() => store.getters.getCompanyList).value
        case 'department':
            return computed(() => store.getters.getDepartmentList).value
        case 'location':
            return computed(() => store.getters.getLocationList).value
        case 'employee':
            return computed(() => store.getters.getEmployeeList).value
        default:
            break;
    }
}

/**
 * Updated the selected item on change
 * @param {*} newValue 
 */
const updateSelectedItem = (newValue) => {
    if (props.dropdown === 'company') {
        // Reset department, location, and employees
        store.commit('updateMultipleFilter', {
            department: '',
            location: '',
            employee: '',
        });
    }

    if (props.dropdown === 'department') {
        // Reset department, location, and employees
        store.commit('updateMultipleFilter', {
            location: '',
            employee: '',
        });
    }

    if (props.dropdown === 'location') {
        // Reset department, location, and employees
        store.commit('updateMultipleFilter', {
            employee: '',
        });
    }

    // Update global filter state
    store.commit('updateFilter', {
        filter: props.dropdown,
        value: newValue,
    });

    // Close the dropdown
    emits('close-dropdown');
};
</script>

<style scoped>
.filter_dropdown .filter_list .filter_item {
    font-size: 1rem;
    width: 100%;
    text-align: center;
    padding: 5px;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    cursor: pointer;
    border: 1px solid var(--gray3);
}
</style>