<template>
    <div class="filter_item" @click="updateSelectedItem('All')">
        <p>All</p>
    </div>
    <div v-for="(item, key) in getDropdownList()" :key="key" class="filter_item" @click="updateSelectedItem(item.name)">
        <p>{{ item.name }}</p>
    </div>
</template>
  
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
    dropdown: String
});
const store = useStore();
const emits = defineEmits(['close-dropdown']);

const companyList = computed(() => store.getters.getCompanyList).value;
const departmentList = computed(() => store.getters.getDepartmentList).value;
const locationList = computed(() => store.getters.getLocationList).value;
const employeeList = computed(() => store.getters.getEmployeeList).value;

/**
 * Get the dropdown item list from store
 */
const getDropdownList = () => {
    switch (props.dropdown) {
        case 'company':
            return companyList;
        case 'department':
            return departmentList;
        case 'location':
            return locationList;
        case 'employee':
            return employeeList;
        default:
            break;
    }
}

/**
 * Update/reset the selected item on change
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
        // Reset location, and employees
        store.commit('updateMultipleFilter', {
            location: '',
            employee: '',
        });
    }

    if (props.dropdown === 'location') {
        // Reset employee
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