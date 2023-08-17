import { createStore } from 'vuex';
import { dropdownData } from '../data';

export default createStore({
    state: {
        filter: {
            date_from  : '',
            date_to    : '',
            company    : '',
            department : '',
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
         * 
         * @param {*} state 
         * @returns 
         */
        getLocationList(state, getters) {
            const departments = getters.getDepartmentList;

            if (departments === undefined || departments.length === 0) return [];

            const department = departments.find(department => {
                return state.filter.department === department.name;
            });

            return department ? department.locations : [];
        },
        /**
         * 
         * @param {*} state 
         * @returns 
         */
        getEmployeeList(state, getters) {
            const departments = getters.getDepartmentList;

            if (departments === undefined || departments.length === 0) return [];

            const department = departments.find(department => {
                return state.filter.department === department.name;
            });

            return department ? department.employees : [];
        },
        /**
         * 
         * @param {*} state 
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