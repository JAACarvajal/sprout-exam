<template>
    <div class="sidebar_section sidebar_action">
        <button :class="['sidebar_action_button search', checkFilterState === true ? 'active' : '']">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />Search
        </button>
        <button :class="['sidebar_action_button export', checkFilterState === true ? 'active' : '']">
            <font-awesome-icon icon="fa-solid fa-download" />Export
        </button>
    </div>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const checkFilterState = computed(() => store.getters.checkFilterState);

</script>