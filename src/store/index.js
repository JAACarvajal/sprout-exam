import { createStore } from 'vuex';
import { dropdownData } from '../data';

export default createStore({
    state: {
        filter: {
            company    : dropdownData[0].name,
            department : 'ALL',
            location   : '',
            employee   : '',
        },
        data: dropdownData
    },
    getters: {
        /**
         * Get filters from state
         * @param {*} state 
         * @returns 
         */
        getFilters(state) {
            return state.filter;
        },
        /**
         * Check if filters are selected properly
         * @param {*} state 
         * @returns 
         */
        checkFilterState(state, getters) {
            if (state.filter.company !== '' && state.filter.department !== '' && state.filter.location !== '' && state.filter.employee !== '') {
                return true;
            }

            if (getters.getLocationList.length === 0 && (state.filter.company !== '' && state.filter.department !== '' && state.filter.employee !== '')) {
                return true;
            }

            if (getters.getEmployeeList.length === 0 && (state.filter.company !== '' && state.filter.department !== '' && state.filter.location !== '')) {
                return true;
            }
        },
        /**
         * Get company list from state
         * @param {*} state 
         * @returns 
         */
        getCompanyList(state) {
            return state.data;
        },
        /**
         * Get the departments based on the selected company
         * @param {*} state 
         * @returns 
         */
        getDepartmentList(state) {
            const company = state.data.find(company => state.filter.company === company.name)
            return company ? company.departments : [];
        },
        /**
         * Get location list based on the selected department
         * @param {*} state 
         * @param {*} getters 
         * @returns 
         */
        getLocationList(state, getters) {
            const departments = getters.getDepartmentList;

            // Return empty if ther is no department selected
            if (departments === undefined || departments.length === 0) return [];

            // Find the location based on the selected department
            const department = departments.find(department => {
                return state.filter.department === department.name;
            });

            return department ? department.locations : [];
        },
        /**
         * Get all employees in the selected department
         * @param {*} state 
         * @param {*} getters 
         * @returns 
         */
        getEmployeeList(state, getters) {
            const departments = getters.getDepartmentList;

            // Return empty if ther is no department selected
            if (departments === undefined || departments.length === 0) return [];

            // Find the employees based on the selected department
            const department = departments.find(department => {
                return state.filter.department === department.name;
            });

            return department ? department.employees : [];
        },
        /**
         * Get the list of employees with location
         * @param {*} state 
         * @param {*} getters 
         * @returns 
         */
        getEmployeesWithLocation(state, getters) {
            return getters.getEmployeeList.filter(item => {
                return item.hasOwnProperty('location');
            });

        }

    },
    mutations: {
        /**
         * Update a filter
         * @param {*} state 
         * @param {*} data 
         */
        updateFilter(state, data) {
            state.filter[data.filter] = data.value;
        },
        /**
         * Update multiple filter
         * @param {*} state 
         * @param {*} data 
         */
        updateMultipleFilter(state, newData) {
            state.filter = {
                ...state.filter,
                ...newData
            };
        }
    },
});